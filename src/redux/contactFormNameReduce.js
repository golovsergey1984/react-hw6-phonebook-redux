//Код без использования Redux Toolkit
/* import { Type } from './phonebookActions.js'

const nameReducer = (state = "", action) => {
    switch (action.type) {
        case Type.NAME_ADD:
            return action.payload

        case Type.NAME_CLEAR:
            return action.payload

        default:
            return state;
    }
}


export default nameReducer; */

//Код c использованием Redux Toolkit
import { createAction, createReducer } from '@reduxjs/toolkit';
const nameToAdd = createAction('NAME_ADD');
const nameToClear = createAction('NAME_CLEAR');

const nameReducer = createReducer('', {
    [nameToAdd]: (state, action) => action.payload,
    [nameToClear]: (state, action) => action.payload,
});


export default nameReducer;