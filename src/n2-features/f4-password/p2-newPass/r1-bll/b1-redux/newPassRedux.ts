import {actionsTypeRegister} from "./newPassActions";


type initialStateType = {}

const initialState ={}

export const newPassRedux = (state: initialStateType =  initialState, action: actionsTypeRegister) => {
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