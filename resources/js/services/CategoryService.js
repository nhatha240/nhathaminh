import API from './API'

export default {
    async getList() {
        return await API.get('api/categories')
    }
}
