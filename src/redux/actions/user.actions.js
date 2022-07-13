import { SET_USER, SET_USER_EMAIL, SET_USER_NAME, SET_USER_PASSWORD, SET_USER_LOGGED_IN} from '../constants/index';

export function setUser(payload) {
    return {
        type: SET_USER,
        user:payload
    }
}

export function setUserName(payload) {
    return {
        type: SET_USER_NAME,
        user_name:payload
    }
}

export function setUserEmail(payload) {
    return {
        type: SET_USER_EMAIL,
        user_email:payload
    }
}

export function setUserPassword(payload) {
    return {
        type: SET_USER_PASSWORD,
        user_password:payload
    }
}

export function setUserLoggedIn(payload) {
    return {
        type: SET_USER_LOGGED_IN,
        is_logged_in:payload
    }
}