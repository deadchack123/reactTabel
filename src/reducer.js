import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from "redux-thunk";

const usersTabel = (state = [], action) => {
    switch (action.type) {
        case 'SAVE_USERS':
            return [
                ...state,
                ...action.users
            ]
        default:
            return state
    }
}

const rootReducer = combineReducers({
    usersTabel
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store