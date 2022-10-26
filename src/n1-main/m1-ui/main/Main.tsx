import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "./routes/routes";
import Login from "../../../n2-features/f1-auth/a1-login/Login";
import Register from "../../../n2-features/f1-auth/a2-register/Register";
import Profile from "../../../n2-features/f2-profile/Profile";
import RecoverPass from "../../../n2-features/f4-password/p1-recoverPass/RecoverPass";
import NewPass from "../../../n2-features/f4-password/p2-newPass/NewPass";
import Error404 from "../../../n2-features/f3-error404/Error404";
import Test from "../../../n2-features/f0-test/Test";

const Main = () => {
    return (
        <>

            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.HEADERS}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.RECOVER_PASS} element={<RecoverPass/>}/>
                <Route path={PATH.NEW_PASS} element={<NewPass/>}/>
                <Route path={'test'} element={<Test/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>

        </>
    );
};

export default Main;