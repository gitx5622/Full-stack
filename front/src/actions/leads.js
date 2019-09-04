import axios from 'axios';
import {tokenCon} from '../actions/auth';

import {GET_LEADS, DELETE_LEAD, ADD_LEAD} from './types';

//  GET LEADS

export const getLeads = () => (dispatch,getState) => {
    axios.get('frontend/', tokenCon(getState))
    .then (res =>{
        dispatch({
            type:GET_LEADS,
            payload: res.data
        });
    })
    .catch(err => console.log(err));

};
//  DELETE LEAD

export const deleteLead = (id) => (dispatch, getState) => {
    axios.delete(`frontend/${id}/`, tokenCon(getState))
    .then (res =>{
        dispatch({
            type:DELETE_LEAD,
            payload: id
        });
    })
    .catch(err => console.log(err));

};

//  ADD LEAD
export const addLead = (lead) => (dispatch, getState)=> {
    return axios.post("frontend/",lead, tokenCon(getState))
    .then (res =>{
        dispatch({
            type:ADD_LEAD,
            payload: res.data
        });
    })
    .catch(err => console.log(err));

};