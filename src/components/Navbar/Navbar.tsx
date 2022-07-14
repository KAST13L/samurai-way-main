import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <hr style={{border:' 1px solid green'}}/>
            <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
        </div>
    );
};

