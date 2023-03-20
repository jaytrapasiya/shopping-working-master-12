import { ActionTypes } from "../Contants/action-types";

const initialState = {
    isAuth: !!localStorage.getItem('token')
}


export const isAuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.IS_USER_LOGIN: {
            const prevState = { ...state }
            prevState.isAuth=payload
            return {...prevState}
        }
            
        case ActionTypes.IS_USER_LOGOUT: {
            const prevState = { ...state }
            prevState.isAuth=payload
            localStorage.clear();
            return {...prevState}
        }

        
        default: return { ...state }
    }
}

