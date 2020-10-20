import {createStore,applyMiddleware} from 'redux';
import {displayData,displayTime} from './reducers';
import logger from 'redux-logger';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const reactPersist={
    key:'root',
    storage,
    keyPrefix:"",
    stateReconciler: hardSet
}

const reactReducer=persistReducer(reactPersist, formDataReducer);

export const store=createStore(
    reactReducer,
    undefined,
    applyMiddleware(logger)
);

export const persistor=persistStore(store);


// //conbineReducers and createStore    
// export default createStore(combineReducers({displayData,displayTime}),window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())