import { SET_USER, SET_USER_NAME , SET_USER_EMAIL,SET_USER_PASSWORD , SET_USER_LOGGED_IN} from '../constants';
const initialState = {
    user:{
        name:"",
        email:"",
        password:""
    },
    is_logged_in:false
}
const userReducer = (state = initialState, action) => {
switch(action.type) {
    case SET_USER:
    return {
        ...state,
        user:action.user
    };
    
    case SET_USER_NAME:
    return {
        ...state,
        user:{
            ...state.user,
            name:action.user_name
        }
    };

    case SET_USER_EMAIL:
    return {
        ...state,
        user:{
            ...state.user,
            email:action.user_email
        }
    };

    case SET_USER_PASSWORD:
    return {
        ...state,
        user:{
            ...state.user,
            password:action.user_password
        }
    };

    case SET_USER_LOGGED_IN:
    return {
        ...state,
        is_logged_in:action.is_logged_in
    };

    default:
    return state;
    }
}
export default userReducer;