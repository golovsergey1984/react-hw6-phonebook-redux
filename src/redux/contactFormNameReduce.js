import { Type } from './phonebookActions.js'

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


export default nameReducer;
