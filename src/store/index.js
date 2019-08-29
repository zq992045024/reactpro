import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import ticket from "./reducers/ticket"

const reducer = combineReducers({
    ticket
})

const store = createStore(reducer,applyMiddleware(reduxThunk));
export default store;