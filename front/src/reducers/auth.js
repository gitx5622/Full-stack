import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    lOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from '../actions/types';

const initialState ={
    token: localStorage.getItem('token'),
    isAuthenticated : null,
    isLoading : false,
    user : null
}
 
export default function(state = initialState, action) {
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user : action.payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
                localStorage.setItem('token',action.payload.token);
                return {
                    ...state,
                    ...action.payload,
                    isAuthenticated: true,
                    isLoading: false
                    }
        case AUTH_ERROR:
        case lOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                token : null,
                user :null,
                isAuthenticated:false,
                isLoading : false
            }
            default:
            return state;
    }
}