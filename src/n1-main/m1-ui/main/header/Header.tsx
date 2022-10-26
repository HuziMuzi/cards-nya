import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/routes";

const Header = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={PATH.LOGIN}>login</NavLink></li>
                <li><NavLink to={PATH.REGISTER}>register</NavLink></li>
                <li><NavLink to={PATH.PROFILE}>profile</NavLink></li>
                <li><NavLink to={PATH.RECOVER_PASS}>recovery password</NavLink></li>
                <li><NavLink to={PATH.NEW_PASS}>create new password</NavLink></li>
                <li><NavLink to={'/test'}>test</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;