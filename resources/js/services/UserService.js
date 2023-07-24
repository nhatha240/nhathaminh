import API from './API'
import { useRoute } from 'vue-router';

const route = useRoute();
export default {
    async saveUserHistory(payload) {
        return await API.post('/api/v1/save-user-history-user', payload);
    }
}