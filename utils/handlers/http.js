import axios from "axios";
const instance = axios.create({
    baseURL: process.env.backendAddress,
    timeout: 60000,
});
instance.interceptors.request.use(
    (config) => {
        let token = ""
        if (typeof window !== "undefined") {
            token = JSON.parse(localStorage.getItem("JWT"))
        }
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);
export default instance;