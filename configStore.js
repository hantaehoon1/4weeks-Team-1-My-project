import {createStore, combineReducers} from 'redux'
import word from "./modules/word"
import desc from "./modules/desc"
import example from "./modules/example"
const rootReducer = combineReducers({word, desc, example})
const store = createStore(rootReducer)
export default store