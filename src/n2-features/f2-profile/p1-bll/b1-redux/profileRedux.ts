import {actionsTypeRegister} from "./profileActions";


type initialStateType = {}

const initialState ={}

export const profileRedux = (state: initialStateType =  initialState, action: actionsTypeRegister) => {
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