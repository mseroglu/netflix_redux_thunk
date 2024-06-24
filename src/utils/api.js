import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_JWS_TOKEN
        //"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGVjYmU2MGFiZmMxZWM4MzRjNzhkYjg0MjdjYWY2MiIsIm5iZiI6MTcxOTIzMjkwOC4yMTc1MzIsInN1YiI6IjY2Nzk2ODg2YWIyOWM2NTU3MGY0ZTEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MigtLkIpAGoPRtqPVdKeFr_9lIYM9qz8vzA3jUinwmo"
        },
    params: {
        language: "tr",
    }
})


export default api