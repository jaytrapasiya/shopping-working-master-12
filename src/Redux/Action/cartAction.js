import { ActionTypes } from '../Contants/action-types';


export const addToCart = (products) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: products
    }
}

export const qtyIncrementProduct = (productId) => {
    return {
        type: ActionTypes.QTY_INCREMENT_PRODUCT,
        payload: productId
    }
}

export const qtyDecrementProduct = (productId) => {
    return {
        type: ActionTypes.QTY_DECREMENT_PRODUCT,
        payload: productId
    }
}

export const removeCartProduct = (productId) => {
    return {
        type: ActionTypes.REMOVE_CART_PRODUCT,
        payload: productId
    }
}
