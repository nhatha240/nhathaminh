import { defineStore } from "pinia";
import ProductService from '../services/ProductService'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: null,
        meta: null,
        paginator: {
            currentPage: null,
            lastPage: null,
            total: 0
        }
    }),
    getters: {
    },
    actions: {
        async getProductList() {
            ProductService.getPaginatedProducts()
                .then((res) => {
                    this.products = res.data.data

                    this.paginator.currentPage = res.data.current_page
                    this.paginator.lastPage = res.data.last_page
                    this.paginator.total = res.data.total
                })
        }
    }
})
