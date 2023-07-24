import API from './API'

export default {
    async getAuthUser() {
        return await API.get('api/v1/auth/user')
    },
    async login(payload) {
        return await API.post('api/v1/auth/login', payload)
    },
    async logout() {
        return await API.post('api/v1/auth/logout')
    },
    async register(payload) {
        return await API.post('api/v1/auth/register', payload)
    },
    async verifiedEmail(payload, id) {
        let str = Object.entries(payload).map(([key, val]) => `${key}=${val}`).join('&');
        return await API.get(`/api/email/verify/${id}?${str}`, payload)
    }
}
