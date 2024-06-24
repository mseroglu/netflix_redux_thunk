import api from "../../utils/api"
import Actions from "../ActionTypes"

// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGVjYmU2MGFiZmMxZWM4MzRjNzhkYjg0MjdjYWY2MiIsIm5iZiI6MTcxOTIzMjkwOC4yMTc1MzIsInN1YiI6IjY2Nzk2ODg2YWIyOWM2NTU3MGY0ZTEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MigtLkIpAGoPRtqPVdKeFr_9lIYM9qz8vzA3jUinwmo'
//     }
// }


//thunk actions
export const getPopular = () => (dispatch) => {
    dispatch({ type: Actions.MOVIES_LOADING, })

    api.get("/movie/popular")
        .then( res => dispatch({ type: Actions.MOVIES_SUCCESS, payload: res.data.results }))
        .catch( err => dispatch({ type: Actions.MOVIES_ERROR, payload: err.message }))

    // fetch('https://api.themoviedb.org/3/movie/popular?language=tr-TR&page=1', options)
    //     .then(response => response.json())
    //     .then(response => dispatch({ type: Actions.MOVIES_SUCCESS, payload: response.results }))
    //     .catch(err => dispatch({ type: Actions.MOVIES_ERROR, payload: err.message }));
}

export const getGenres = () => (dispatch) => {
    dispatch({ type: Actions.GENRES_LOADING, })

        api.get("/genre/movie/list")
            .then((res) => dispatch({ type: Actions.GENRES_SUCCESS, payload: res.data.genres }))
            .catch((err) => dispatch({ type: Actions.GENRES_ERROR, payload: err.message }))

    // fetch('https://api.themoviedb.org/3/genre/movie/list?language=tr', options)
    //     .then(response => response.json())
    //     .then(response => dispatch({ type: Actions.GENRES_SUCCESS, payload: response.genres }))
    //     .catch(err => dispatch({ type: Actions.GENRES_ERROR, payload: err.message }));
}