import { ActionTypes } from '../Contants/action-types';

export const isUserLogin = () => {
    return {
        type: ActionTypes.IS_USER_LOGIN,
        payload: true
    }
}

export const isUserLogout = () => {
    return {
        type: ActionTypes.IS_USER_LOGOUT,
        payload: false
    }
}
