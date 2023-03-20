import { ActionTypes } from "../Contants/action-types";


const initialState = {
    cartItems: []
}

let subtotal = 0
export const cartReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        //PRODUCT ADD TO CART
        case ActionTypes.ADD_TO_CART: {
            const prevState = { ...state };
            const index = prevState.cartItems.findIndex((getIndex) => {
                return (getIndex.id === payload.id)
            })

            if (index < 0) {
                prevState.cartItems.push(payload)
                return { ...prevState }
            }
            else {
                alert("Product is alredy Add in Cart.....!")
            }
            return { ...state }
        }



        case ActionTypes.QTY_INCREMENT_PRODUCT: {
            const prevState = { ...state };
            const index = prevState.cartItems.findIndex((getIndex) => {
                return (getIndex.id === payload)
            })

            if (index > -1) {
                prevState.cartItems[index].qty = prevState.cartItems[index].qty + 1;
                prevState.cartItems[index].total = Math.round(prevState.cartItems[index].total + prevState.cartItems[index].price);
                // return { ...prevState }
            }
            // subtotal=subtotal+prevState.cartItems[index].total
            console.log("===========> prevState", prevState, subtotal)
            return { ...prevState }
        }



        case ActionTypes.QTY_DECREMENT_PRODUCT: {
            const prevState = { ...state };
            const index = prevState.cartItems.findIndex((getIndex) => {
                return (getIndex.id === payload)
            })

            if (index > -1) {
                if (prevState.cartItems[index].qty > 1) {
                    prevState.cartItems[index].qty = prevState.cartItems[index].qty - 1;
                    prevState.cartItems[index].total = Math.round(prevState.cartItems[index].total - prevState.cartItems[index].price);
                    return { ...prevState }
                }
                else {
                    prevState.cartItems.splice(index, 1)
                    return { ...prevState }
                }
            }

            return { ...state }
        }


        // //QUNTITY REMOVE PRODUCT OT CART
        // case ActionTypes.REMOVE_CART_PRODUCT: {
        //     const prevState = state;
        //     const index = prevState.cartItems.findIndex((getIndex) => {
        //         return (getIndex.id === payload)
        //     })
        //     if (window.confirm("Do You Want to Remove This Product...!")) {
        //         prevState.cartItems.splice(index, 1)
        //         return { ...prevState }
        //     }
        //     return { ...state}
        // }


        default:
            return state
    }
}