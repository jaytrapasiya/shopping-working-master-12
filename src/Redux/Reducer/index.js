import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { isAuthReducer } from './isAuthReducer';


const rootReducer = combineReducers({
    allProducts: productReducer,
    allCartItems: cartReducer,
    userIsAuth: isAuthReducer
})

export default rootReducer;