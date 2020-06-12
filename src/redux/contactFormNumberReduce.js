//Код без использования Redux Toolkit
/* import { Type } from './phonebookActions.js'

const numberReducer = (state = "", action) => {
    switch (action.type) {

        case Type.NUMBER_ADD:
            return action.payload

        case Type.NUMBER_CLEAR:
            return action.payload

        default:
            return state;
    }
}

export default numberReducer; */

//Код c использованием Redux Toolkit
import { createAction, createReducer } from '@reduxjs/toolkit';
const numberToAdd = createAction('NUMBER_ADD');
const numberToClear = createAction('NUMBER_CLEAR');

const numberReducer = createReducer('', {
    [numberToAdd]: (state, action) => action.payload,
    [numberToClear]: (state, action) => action.payload,
});


export default numberReducer;