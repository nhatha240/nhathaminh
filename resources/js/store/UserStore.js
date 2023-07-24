import { defineStore } from "pinia";
import UserService from "../services/UserService";

export const useUserStore = defineStore("users", {
    state: () => ({
        users: null,
    }),
    getters: {},
    actions: {
        async saveHistory(userInfo) {
            return new Promise((resolve, reject) => {
                UserService.saveUserHistory(userInfo)
                    .then(({data}) => {
                        console.log(data)
                        resolve(data)
                    })
                    .catch(({response}) => reject(response))
            })
        }
    }
})