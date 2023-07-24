import { defineStore } from "pinia"
import AuthService from '../services/AuthService'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        verifyInfo: {}
    }),
    getters: {
        loggedUser: (state) => state.user
    },
    actions: {
        async getAuthUser() {
            try {
                let res = await AuthService.getAuthUser()
                this.user = res.data
            } catch (error) {
                console.error(error)
            }
        },
        async login({email, password}) {
            return new Promise((resolve, reject) => {
                AuthService.login({email, password})
                    .then(({data}) => {
                        this.user = data.user
                        resolve()
                    })
                    .catch(({response}) => reject(response))
            })
        },
        async register(userInfo) {
            console.log(userInfo)
            return new Promise((resolve, reject) => {
                AuthService.register(userInfo)
                    .then(({data}) => {
                        resolve(data)
                    })
                    .catch(({response}) => reject(response))
            })
        },
        async verifiedEmailUser(mailInfo, id) {
            return new Promise((resolve, reject) => {
                AuthService.verifiedEmail(mailInfo, id)
                    .then(({data}) => {
                        this.verifyInfo = data?.data
                        resolve(data)
                    })
                    .catch(({response}) => reject(response))
            })
        },
        async logout() {
            try {
                await AuthService.logout()
                this.user = null
            } catch (error) {
                console.error(error)
            }
        }
    }
})
