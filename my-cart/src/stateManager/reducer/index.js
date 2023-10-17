import { createStore, combineReducers } from 'redux';
import cartReducer from './apiData.reducer';


const rootReducer = combineReducers({
    cart: cartReducer,
});



const store = createStore(rootReducer);



export default store;