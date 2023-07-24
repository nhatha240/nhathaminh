import API from "./API";

export default {
    async getMobility(query) {
        const params = Object.fromEntries(Object.entries(query).filter(([_, v]) => v != null));
        const qs = '?' + new URLSearchParams(params).toString()
        console.log(qs)
        return await API.get(`/api/v1/get-list-mobility${qs}`);
    },
};
