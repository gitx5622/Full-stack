import {
USER_LOADED,
USER_LOADING,
AUTH_ERROR,
LOGIN_SUCCESS,
LOGOUT_SUCCESS,
REGISTER_SUCCESS,
REGISTER_FAIL
} from './types';
import axios from 'axios';

// GET TOKEN AND LOAD USER
export const  loadUser = () =>(dispatch, getState) => {
    // User loading
    dispatch ({type:USER_LOADING});

    // Get token from state
    const token = getState().auth.token;


    //Headers
    const config = {
        headers :{
            'Content-Type': 'application/json'
        }
    }

    //if token, add to headers config

    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }
axios.get('user', config)
.then(res =>{
    dispatch({
        type:USER_LOADED,
        payload: res.data
    });
}).catch(err => console.log(err));
// dispatch({
//     type:AUTH_ERROR
// });
}


// CHET TOKEN AND LOAD USER
export const  login = (username, password) => dispatch => {
   
    //Headers
    const config = {
        headers :{
            'Content-Type': 'application/json'
        }
    }
    // Request Body 
    const body = JSON.stringify({username,password}) ;

    axios.post('login', body, config)
.then(res =>{
    dispatch({
        type:LOGIN_SUCCESS,
        payload: res.data
    });
}).catch(err => console.log(err));
// dispatch({
//     type:LOGIN_FAIL
// });
}

// LOGOUT 
export const  logout = () =>(dispatch, getState) => {
   
    // Get token from state
    const token = getState().auth.token;


    //Headers
    const config = {
        headers :{
            'Content-Type': 'application/json'
        }
    }

    //if token, add to headers config

    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }
axios.post('logout',null, config)
.then(res =>{
    dispatch({
        type:LOGOUT_SUCCESS
    });
}).catch(err => console.log(err));

}


// GET TOKEN AND LOAD USER
// REGISTER
export const register  = ({username, email, password}) => dispatch => {
   
    //Headers
    const config = {
        headers :{
            'Content-Type': 'application/json'
        }
    }
    // Request Body 
    const body = JSON.stringify({username,email, password}) ;

    axios.post('register', body, config)
.then(res =>{
    dispatch({
        type:REGISTER_SUCCESS,
        payload: res.data
    });
}).catch(err => console.log(err));
// dispatch({
//     type:REGISTER_FAIL
// });
}

export const tokenCon = getState => {
   
    // Get token from state
    const token = getState().auth.token;


    //Headers
    const config = {
        headers :{
            'Content-Type': 'application/json'
        }
    }

    //if token, add to headers config

    if(token){
        config.headers['Authorization'] = `Token ${token}`
    }

    return config;
}