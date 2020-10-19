import {createStore,combineReducers} from 'redux';
import {displayData} from './reducers';

export default createStore(combineReducers({displayData}),window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())