/* import { createStore, combineReducers } from 'redux'; */ //Код без использования Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
/* import { devToolsEnhancer } from 'redux-devtools-extension'; */ //Код без использования Redux Toolkit
import contactFormNameReduce from "./contactFormNameReduce.js";
import contactFormNumberReduce from "./contactFormNumberReduce.js";
import contactFormReduce from "./contactFormReduce.js";

//Код без использования Redux Toolkit
/* const rootReducer = combineReducers({
    name: contactFormNameReduce,
    number: contactFormNumberReduce,
    contacts: contactFormReduce,
    delete: contactFormReduce,
    filter: contactFormReduce,
    clear_input: contactFormNameReduce,
    localDbAdd: contactFormReduce,
})

const store = createStore(rootReducer, devToolsEnhancer()); */

const store = configureStore({
    reducer: {
        name: contactFormNameReduce,
        number: contactFormNumberReduce,
        contacts: contactFormReduce,
        delete: contactFormReduce,
        filter: contactFormReduce,
        clear_input: contactFormNameReduce,
        localDbAdd: contactFormReduce,
    },
});

export default store;