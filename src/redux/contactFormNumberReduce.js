import { Type } from './phonebookActions.js'

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

export default numberReducer;