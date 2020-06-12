import { Type } from './phonebookActions.js'

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


export default formReducer;
