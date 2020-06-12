import { Type } from './phonebookActions.js'

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