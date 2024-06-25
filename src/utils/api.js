import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_JWS_TOKEN
        },
    params: {
        language: "tr",
    }
})


export default api