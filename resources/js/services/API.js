import axios from 'axios'

const apiClient = axios.create({
    withCredentials: true
})

apiClient.interceptors.response.use((response) => {
    return response
}, function (error) {
    console.log(error)
    return Promise.reject(error)
})

console.log('Axios Client created!')

export default apiClient
