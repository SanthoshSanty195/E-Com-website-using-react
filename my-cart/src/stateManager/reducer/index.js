import { createStore } from "redux";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import apiData from './apiData.reducer';

const persistConfig = {
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    apiData
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer);
export let persist = persistStore(store);