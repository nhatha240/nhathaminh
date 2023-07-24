import { defineStore } from "pinia";
import CategoryService from '../services/CategoryService'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: null,
        meta: null,
    }),
    getters: {
    },
    actions: {
        async getCategoryList() {
            let res = await CategoryService.getList()

            if (res) {
                this.categories = res.data
            }
        }
    }
})
