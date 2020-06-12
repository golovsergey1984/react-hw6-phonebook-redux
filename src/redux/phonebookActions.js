import { createAction } from '@reduxjs/toolkit';
//Код без использования Redux Toolkit
/* export const Type = {
    NAME_ADD: 'NAME_ADD',
    NUMBER_ADD: 'NUMBER_ADD',
    FORM_ADD: "FORM_ADD",
    DELETE_CONTACT: "DELETE_CONTACT",
    FILTER_VALUE: 'FILTER_VALUE',
    NAME_CLEAR: "NAME_CLEAR",
    NUMBER_CLEAR: "NUMBER_CLEAR",
    FORM_LOCAL_ADD: "FORM_LOCAL_ADD"
} */

/* export const filterName = e => ({
    type: "FILTER_VALUE",
    filter: e.target.value,
})
 */


/* export const nameToAdd = (e) => ({
    type: Type.NAME_ADD,
    name: e.target.value
}) */

/* export const nameToClear = () => ({
    type: Type.NAME_CLEAR,
    name: ""
}) */

/* export const numberToClear = () => ({
    type: Type.NUMBER_CLEAR,
    number: ""
})



export const numberToAdd = (e) => ({
    type: Type.NUMBER_ADD,
    number: e.target.value

}) */

/* export const contactFormToAdd = (id, name, number) => ({
    type: Type.FORM_ADD,
    id: id,
    name: name,
    number: number
}) */

/* export const contactLocalDBAdd = (value) => ({
    type: Type.FORM_LOCAL_ADD,
    payload: value
}) */

/* export const deleteContact = (id) => ({
    type: 'DELETE_CONTACT',
    payload: id
}); */



//Код c использованием Redux Toolkit
export const filterName = createAction('FILTER_VALUE', function prepare(e) {
    return {
        payload: e.target.value,
    }
})


export const nameToAdd = createAction('NAME_ADD', function prepare(e) {
    return {
        payload: e.target.value,
    }
})

export const nameToClear = createAction('NAME_CLEAR', function prepare(e) {
    return {
        payload: "",
    }
})

export const numberToAdd = createAction('NUMBER_ADD', function prepare(e) {
    return {
        payload: e.target.value,
    }
})

export const numberToClear = createAction('NUMBER_CLEAR', function prepare(e) {
    return {
        payload: "",
    }
})

export const contactFormToAdd = createAction('FORM_ADD', function prepare(id, name, number) {
    return {
        payload: {
            id: id,
            name: name,
            number: number
        }
    }

})

export const contactLocalDBAdd = createAction('FORM_LOCAL_ADD', function prepare(value) {
    return {
        payload: value
    }

})

export const deleteContact = createAction('DELETE_CONTACT', function prepare(id) {
    return {
        payload: id
    }

})

