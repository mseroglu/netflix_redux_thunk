import Actions from "../ActionTypes";


const initialState = {
    isLoading: false,
    error: null,
    genres: []
}

const genreReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actions.GENRES_LOADING:
            return { ...state, isLoading: true };

        case Actions.GENRES_ERROR:
            return { ...state, isLoading: false, error: payload };

        case Actions.GENRES_SUCCESS:
            return { isLoading: false, error: null, genres: payload };

        default:
            return state;
    }
}
export default genreReducer