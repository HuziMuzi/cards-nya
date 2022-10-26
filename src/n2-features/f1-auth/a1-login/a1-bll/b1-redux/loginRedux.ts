import {actionsTypeRegister} from "./loginActions";


type initialStateType = {}

const initialState ={}

export const loginRedux = (state: initialStateType =  initialState, action: actionsTypeRegister) => {
    switch (action.type) {
        case "firstType": {
            return {
                ...state
            }
        }
        default :
            return state

    }
}