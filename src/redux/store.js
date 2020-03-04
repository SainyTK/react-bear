import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const initFormData = {
    name: '',
    weight: 0,
    img: ''
}

export const FormActions = {
    changeName: (name) => ({ type: 'CHANGE_NAME', name }),
    changeWeight: (weight) => ({ type: 'CHANGE_WEIGHT', weight }),
    changeImg: (img) => ({ type: 'CHANGE_IMG', img }),
}

const FormReducer = (data = initFormData, action) => {
    switch (action.type) {
        case 'CHANGE_NAME': return { ...data, name: action.name }
        case 'CHANGE_WEIGHT': return { ...data, weight: action.weight }
        case 'CHANGE_IMG': return { ...data, img: action.img }
        default: return data;
    }
}

export const BearActions = {
    getBears: () => async (dispatch, getState) => {
        const res = await axios.get(`http://localhost/api/bears`);
        dispatch({ type: 'GET_BEARS', bears: res.data })
    },
    addBear: (bear) => async (dispatch, getState) => {
        const prevBears = getState().Bear;
        const data = { id: prevBears.length > 0 ? prevBears[prevBears.length - 1].id + 1 : 0, ...bear }
        const res = await axios.post(`http://localhost/api/bears`, data)
        dispatch({ type: 'ADD_BEAR', bear: data });
    },
    deleteBear: (id) => async (dispatch, getState) => {
        console.log(id);
        const res = await axios.delete(`http://localhost/api/bears/${id}`)
        console.log(res);
        dispatch({ type: 'DELETE_BEAR', id })
    },
    updateBear: (id, bear) => async (dispatch, getState) => {
        const res = await axios.put(`http://localhost/api/bears/${id}`, bear);
        console.log(res)
        dispatch({ type: 'UPDATE_BEAR', id, bear })
    }
}

const BearReducer = (bears = [], action) => {
    switch (action.type) {
        case 'GET_BEARS': return action.bears;
        case 'ADD_BEAR': return [...bears, action.bear];
        case 'DELETE_BEAR': return bears.filter(bear => +bear.id !== +action.id)
        case 'UPDATE_BEAR': return bears.map(bear => bear.id === action.id ? action.bear : bear);
        default: return bears;
    }
}

const reducers = combineReducers({
    Bear: BearReducer,
    Form: FormReducer
});

export const store = createStore(reducers, applyMiddleware(logger, thunk));