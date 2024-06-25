import api from "../../utils/api"
import Actions from "../ActionTypes"


//thunk actions
export const getPopular = () => (dispatch) => {
    dispatch({ type: Actions.MOVIES_LOADING, })

    api.get("/movie/popular")
        .then( res => dispatch({ type: Actions.MOVIES_SUCCESS, payload: res.data.results }))
        .catch( err => dispatch({ type: Actions.MOVIES_ERROR, payload: err.message }))

    }

export const getGenres = () => (dispatch) => {
    dispatch({ type: Actions.GENRES_LOADING, })

        api.get("/genre/movie/list")
            .then((res) => dispatch({ type: Actions.GENRES_SUCCESS, payload: res.data.genres }))
            .catch((err) => dispatch({ type: Actions.GENRES_ERROR, payload: err.message }))

 }
 