import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todoReducers } from '../reducer/todoReducers';
import { tabReducer } from '../reducer/tabReducer';

const reducer=combineReducers({
    todo:todoReducers,
    currentTab:tabReducer,
})
const middleware=[thunk];
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store; 