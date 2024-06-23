import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducer"
import movieReducer from "./reducers/movieReducer"


const rootReducer = combineReducers({genreReducer, movieReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store