import {createStore,combineReducers} from 'redux';
import {displayData,displayTime} from './reducers';

//conbineReducers and createStore    
export default createStore(combineReducers({displayData,displayTime}),window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())