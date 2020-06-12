//Код без использования Redux Toolkit
/* import { Type } from './phonebookActions.js'

const initialState = ({
    contacts: [],
    filter: ""
});

const formReducer = (state = initialState, action) => {

    switch (action.type) {
        case Type.FORM_LOCAL_ADD:
            return {
                contacts: action.payload

            }

        case Type.FORM_ADD:
            return {
                ...state.contacts,
                contacts: state.contacts.concat([{ id: action.payload.id, name: action.payload.name, number: action.payload.number }])

            }

        case Type.DELETE_CONTACT:
            return {
                ...state.contacts,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }

        case Type.FILTER_VALUE:
            return {
                ...state,
                filter: action.payload,
            }




        default:
            return state;
    }
}


export default formReducer; */

//Код c использованием Redux Toolkit
import { createAction, createReducer } from '@reduxjs/toolkit';
const initialState = ({
    contacts: [],
    filter: ""
});
const contactLocalDBAdd = createAction('FORM_LOCAL_ADD');
const contactFormToAdd = createAction('FORM_ADD');
const deleteContact = createAction('DELETE_CONTACT');
const filterName = createAction('FILTER_VALUE');

const formReducer = createReducer(initialState, {
    [contactLocalDBAdd]: (state, action) => { return { contacts: action.payload } },
    [contactFormToAdd]: (state, action) => {
        return {
            ...state.contacts,
            contacts: state.contacts.concat([{ id: action.payload.id, name: action.payload.name, number: action.payload.number }])
        }
    },
    [deleteContact]: (state, action) => {
        return {
            ...state.contacts,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        }
    },

    [filterName]: (state, action) => {
        return {
            ...state,
            filter: action.payload,
        }
    },


});


export default formReducer;