<?php

namespace Botble\Marketplace\Http\Controllers\Fronts;

use Botble\Base\Facades\BaseHelper;
use Botble\Base\Enums\BaseStatusEnum;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Ecommerce\Services\Products\GetProductService;
use Botble\Marketplace\Http\Requests\CheckStoreUrlRequest;
use Botble\Marketplace\Models\Store;
use Botble\Marketplace\Repositories\Interfaces\StoreInterface;
use Botble\SeoHelper\SeoOpenGraph;
use Botble\Ecommerce\Facades\EcommerceHelper;
use Botble\Theme\Facades\Theme;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Botble\Media\Facades\RvMedia;
use Botble\SeoHelper\Facades\SeoHelper;
use Botble\Slug\Facades\SlugHelper;

class PublicStoreController
{
    public function __construct(protected StoreInterface $storeRepository)
    {
    }

    public function getStores(Request $request)
    {
        Theme::breadcrumb()->add(__('Home'), route('public.index'))
            ->add(__('Stores'), route('public.stores'));

        SeoHelper::setTitle(__('Stores'))->setDescription(__('Stores'));

        $condition = ['status' => BaseStatusEnum::PUBLISHED];

        $search = BaseHelper::stringify(BaseHelper::clean($request->input('q')));
        if ($search) {
            $condition[] = ['name', 'LIKE', '%' . $search . '%'];
        }

        $with = ['slugable'];
        if (EcommerceHelper::isReviewEnabled()) {
            $with['reviews'] = function ($query) {
                $query->where([
                    'ec_products.status' => BaseStatusEnum::PUBLISHED,
                    'ec_reviews.status' => BaseStatusEnum::PUBLISHED,
                ]);
            };
        }

        $stores = $this->storeRepository->advancedGet([
            'condition' => $condition,
            'order_by' => ['created_at' => 'desc'],
            'paginate' => [
                'per_page' => 12,
                'current_paged' => $request->integer('page'),
            ],
            'with' => $with,
            'withCount' => [
                'products' => function ($query) {
                    $query->where(['status' => BaseStatusEnum::PUBLISHED]);
                },
            ],
        ]);

        return Theme::scope('marketplace.stores', compact('stores'), 'plugins/marketplace::themes.stores')->render();
    }

    public function getStore(
        string $key,
        Request $request,
        GetProductService $productService,
        BaseHttpResponse $response
    ) {
        $slug = SlugHelper::getSlug($key, SlugHelper::getPrefix(Store::class));

        if (! $slug) {
            abort(404);
        }

        $condition = [
            'mp_stores.id' => $slug->reference_id,
            'mp_stores.status' => BaseStatusEnum::PUBLISHED,
        ];

        if (Auth::check() && $request->input('preview')) {
            Arr::forget($condition, 'status');
        }

        $store = $this->storeRepository->getFirstBy($condition, ['*'], ['slugable', 'metadata']);

        if (! $store) {
            abort(404);
        }

        if ($store->slugable->key !== $slug->key) {
            return redirect()->to($store->url);
        }

        SeoHelper::setTitle($store->name)->setDescription($store->description);

        $meta = new SeoOpenGraph();
        if ($store->logo) {
            $meta->setImage(RvMedia::getImageUrl($store->logo));
        }
        $meta->setDescription($store->description);
        $meta->setUrl($store->url);
        $meta->setTitle($store->name);

        SeoHelper::setSeoOpenGraph($meta);

        Theme::breadcrumb()
            ->add(__('Home'), route('public.index'))
            ->add(__('Stores'), route('public.stores'))
            ->add($store->name, $store->url);

        $with = [
            'slugable',
            'variations',
            'productLabels',
            'variationAttributeSwatchesForProductList',
            'store',
            'store.slugable',
        ];

        $products = $productService->getProduct($request, null, null, $with, [], ['store_id' => $store->id]);

        if ($request->ajax()) {
            $total = $products->total();
            $message = $total > 1 ? __(':total Products found', compact('total')) : __(
                ':total Product found',
                compact('total')
            );

            $view = Theme::getThemeNamespace('views.marketplace.stores.items');

            if (! view()->exists($view)) {
                $view = 'plugins/marketplace::themes.stores.items';
            }

            return $response
                ->setData(view($view, compact('products', 'store'))->render())
                ->setMessage($message);
        }

        return Theme::scope('marketplace.store', compact('store', 'products'), 'plugins/marketplace::themes.store')->render();
    }

    public function checkStoreUrl(CheckStoreUrlRequest $request, BaseHttpResponse $response)
    {
        if (! $request->ajax()) {
            abort(404);
        }

        $slug = $request->input('url');
        $slug = Str::slug($slug, '-', ! SlugHelper::turnOffAutomaticUrlTranslationIntoLatin() ? 'en' : false);

        $existing = SlugHelper::getSlug($slug, SlugHelper::getPrefix(Store::class));

        $response->setData(['slug' => $slug]);

        if ($existing && $existing->reference_id != $request->input('reference_id')) {
            return $response
                ->setError()
                ->setMessage(__('Not Available'));
        }

        return $response->setMessage(__('Available'));
    }
}
