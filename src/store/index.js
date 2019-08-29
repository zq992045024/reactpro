import { createStore,combineReducers,applyMiddleware } from "redux";

import reduxThunk from "redux-thunk"

import hot from "./reducers/hot"
import users from "./reducers/users"


const reducers = combineReducers({
    hot,
    users
})

const store = createStore(reducers,applyMiddleware(reduxThunk))
export default store