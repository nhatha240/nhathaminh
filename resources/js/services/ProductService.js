import API from './API'

export default {
    async getPaginatedProducts() {
        return await API.get('api/products')
    }
}
