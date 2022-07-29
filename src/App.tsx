import React from 'react';
import s from "./App.module.css"
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Content/Profile/Profile";
import {Redirect, Route} from "react-router-dom";
import {News} from "./components/Content/News/News";
import {DialogsContainer} from "./components/Content/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Content/Users/UsersContainer";

export const App = () => {
    return (
        <div className={s.App}>
            <Header/>
            <Navbar/>
            <div className={s.content}>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Redirect to={'/profile'}/>
            </div>
        </div>
    );
}
