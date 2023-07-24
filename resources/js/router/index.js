import { createRouter, createWebHistory } from "vue-router";
import auth from '../middlewares/auth'
import { useAuthStore } from '../store/AuthStore'
import { useQuestionStore } from "../store/QuestionStore";
function routeMiddleware(context, middlewares, index) {
    const nextMiddleware = middlewares[index]

    if (!nextMiddleware) {
        return context.next
    }

    return () => {
        nextMiddleware({
            ...context,
            next: routeMiddleware(context, middlewares, index + 1),
        })
    }
}

const ifMainAccount = async (to, from, next) => {
    const storeUser = useAuthStore();
    if (storeUser?.loggedUser?.type != 2) {
        next();
    } else {
        next("/");
    }
}

const isTutorial = async (to, from, next) => {
    const storeQuestion = useQuestionStore();
    const uuid = localStorage.getItem("uuid");
    try {
        await storeQuestion.getUserInfo(uuid);
        if (storeQuestion.userInfo?.isTutorial) {
            next("/mobility");
          } else {
            if (to.path === "/mobility") {
              next("/");
            }
            next();
          }
    } catch (error) {}
}

const isNotTutorial = async (to, from, next) => {
    const storeQuestion = useQuestionStore();
    const uuid = localStorage.getItem("uuid");
    try {
        await storeQuestion.getUserInfo(uuid);
        if (storeQuestion.userInfo?.isTutorial) {
            if (to.path === "/") {
                next("/mobility");
            }
            next();
          } else {
            next("/");
          }
    } catch (error) {}
}


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("@/resources/js/views/Home.vue"),
            beforeEnter: isTutorial,
        },
        {
            path: "/mobility",
            name: "CapsuleList",
            component: () => import("@/resources/js/views/Mobility.vue"),
            meta: { title: '推しモビ図鑑' },
            beforeEnter: isNotTutorial,
        },
        {
            path: "/capsule-list/:id",
            name: "Detail",
            component: () => import("@/resources/js/views/Detail.vue"),
            meta: { title: '推しモビ図鑑' },
            beforeEnter: isNotTutorial,
        }
    ],
});


router.beforeEach((to, from, next) => {
    const middleware = to.meta.middleware
    const context = { to, from, next, store: useAuthStore() }
    document.title = to.meta.title

    if (!middleware) {
        return next()
    }

    middleware[0]({
        ...context,
        next: routeMiddleware(context, middleware, 1),
    })
})

export default router;
