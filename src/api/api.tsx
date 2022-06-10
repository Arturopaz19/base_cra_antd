import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const Interceptor = (store: any) => {
    api.interceptors.request.use((request) => {
        console.log(store);
        return request;
    });
    api.interceptors.response.use((response) => response);
}
export default api;
