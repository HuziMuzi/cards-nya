import {actionsTypeRegister} from "./registerActions";


type initialStateType = {}

const initialState ={}

export const registerRedux = (state: initialStateType =  initialState, action: actionsTypeRegister) => {
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