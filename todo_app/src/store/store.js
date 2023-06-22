import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todoReducers } from '../reducer/todoReducers';
const reducer=combineReducers({
    todo:todoReducers,
})
const middleware=[thunk];
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store; 