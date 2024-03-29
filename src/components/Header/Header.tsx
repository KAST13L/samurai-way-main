import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {AuthUserDataType} from "../../redux/auth-reducer";

type HeaderPropsType = {
    authData: AuthUserDataType
    logoutTC: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <span>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ef/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D1%8B_%22%D0%9D%D0%B5%D1%80%D0%B2%D1%8B%22.jpg"
                    alt="hi"/>
            </span>
            <span className={s.loginBlock}>
                {
                    props.authData.isAuth
                        ? <span style={{color: 'white'}}>{props.authData.login} - <button onClick={props.logoutTC}>logout</button></span>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </span>
        </div>
    );
};

