import API from './API'

const convertJson = (payload) => {
    const params = Object.fromEntries(Object.entries(payload).filter(([_, v]) => v != null));
    const qs = '?' + new URLSearchParams(params).toString()
    return qs;
}
export default { 
    async getQuestionList() {
        return await API.get('/api/v1/get-question-info-list')
    },
    async getItemByAnswer(payload) {
        const qs = convertJson(payload)
        return await API.get(`/api/v1/get-item-random-by-answer${qs}`)
    },
    async saveAnswerHistory(payload) {
        const qs = convertJson(payload)
        return await API.post(`/api/v1/save-user-history-user${qs}`)
    },
    async getUserInfo (payload) {
        return await API.get(`/api/v1/get-user-info?uuid=${payload}`)
    },
    async getMobilityDetail (payload) {
        const qs = convertJson(payload)
        return await API.get(`/api/v1/get-mobility-detail-info${qs}`)
    },
    async saveUserAnswer(payload) {
        return await API.post(`/api/v1/save-answer-history`,(payload))
    },
}
