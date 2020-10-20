import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {formDataReducer} from './reducers'

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
