import {actionsTypeRegister} from "./recoverPassActions";


type initialStateType = {}

const initialState ={}

export const recoverPassRedux = (state: initialStateType =  initialState, action: actionsTypeRegister) => {
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