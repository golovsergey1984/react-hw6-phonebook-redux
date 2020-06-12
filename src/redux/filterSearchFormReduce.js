//Код без использования Redux Toolkit
/* import { Type } from './phonebookActions.js'

const filterReducer = (state = "", action) => {
    switch (action.type) {

        case Type.FILTER_VALUE:
            console.log(action.payload)
            return action.payload

        default:
            return state;
    }
}

export default filterReducer;
 */
//Код c использованием Redux Toolkit
import { createAction, createReducer } from '@reduxjs/toolkit';
const filterName = createAction('FILTER_VALUE');


const filterReducer = createReducer('', {
    [filterName]: (state, action) => action.payload,

});


export default filterReducer;