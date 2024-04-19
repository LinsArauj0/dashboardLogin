import axios from "axios";

const baseUrl = "https://api-manager-test.infog2.com.br.infog2.com.br";

export const api = axios.create({
    baseURL: baseUrl
});

// Essa classe permite abstrair chamadas de API pelo axios, definindo uma URL base para todas requisições
class ApiService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async post(url, objeto) {
        const requestUrl = `${this.apiUrl}${url}`
        return api.post(requestUrl, objeto)
    }

    async put(url, obj) {
        const requestUrl = `${this.apiUrl}${url}`
        return api.put(requestUrl, obj);
    }

    async delete(url) {
        const requestUrl = `${this.apiUrl}${url}`
        return api.delete(requestUrl)
    }

    async get(url) {
        try {
            return api.get(`${this.apiUrl}${url}`)
        } catch (error) {
            return false;
        }
    }
}

//Adiciona cabeçalho 'Authorization' com token antes de cada requisição ser enviada
api.interceptors.request.use(config => {
    const token = localStorage.getItem('Token') || '';

    if (!token) return config;

    if (config?.headers) {
        config.headers = { Authorization: `Token ${token}` }
    }
    return config;
});

export default ApiService;

