import {createStore,combineReducers} from 'redux';
import {displayData} from './reducers';

//conbineReducers in case we create 2 reducers for docForm and docTiming
export default createStore(combineReducers({displayData}),window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())