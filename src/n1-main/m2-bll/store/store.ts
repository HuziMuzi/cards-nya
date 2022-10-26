import {combineReducers, legacy_createStore} from "redux";
import {ThunkAction} from "redux-thunk";
import {loginRedux} from "../../../n2-features/f1-auth/a1-login/a1-bll/b1-redux/loginRedux";
import {registerRedux} from "../../../n2-features/f1-auth/a2-register/a1-bll/b1-redux/registerRedux";
import {profileRedux} from "../../../n2-features/f2-profile/p1-bll/b1-redux/profileRedux";
import {recoverPassRedux} from "../../../n2-features/f4-password/p1-recoverPass/r1-bll/b1-redux/recoverPassRedux";
import {newPassRedux} from "../../../n2-features/f4-password/p2-newPass/r1-bll/b1-redux/newPassRedux";


let rootReducer = combineReducers({
    loginRedux,
    registerRedux,
    profileRedux,
    recoverPassRedux,
    newPassRedux

})
export type AppRootState = ReturnType<typeof rootReducer>
export let store = legacy_createStore(rootReducer)


// export type ActionsType
// export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, ActionsType>


// @ts-ignore
window.store = store