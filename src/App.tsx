import React from 'react';
import s from "./App.module.css"
import {Navbar} from "./components/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Content/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Content/Users/UsersContainer";
import {ProfileContainer} from "./components/Content/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";

export const App = () => {
    return (
        <div className={s.App}>
            <HeaderContainer/>
            <Navbar/>
            <div className={s.content}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Redirect to={'/profile'}/>
            </div>
        </div>
    );
}
