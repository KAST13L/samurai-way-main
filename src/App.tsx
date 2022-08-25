import React from 'react';
import s from "./App.module.css"
import {Navbar} from "./components/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Content/Login/Login";
import {News} from "./components/Content/News/News";

export const App = () => {
    return (
        <div className={s.App}>
            <HeaderContainer/>
            <Navbar/>
            <div className={s.content}>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Redirect to={'/profile'}/>
            </div>
        </div>
    );
}
