import React from 'react';
import s from "./App.module.css"
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {Profile} from "./components/Content/Profile/Profile";
import {Redirect, Route} from "react-router-dom";
import {News} from "./components/Content/News/News";
import {StoreDataType} from "./redux/state";

type AppPropsType = {
    store: StoreDataType
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={s.App}>
            <Header/>
            <Navbar/>
            <div className={s.content}>
                <Route path='/profile' render={() => <Profile postsData={props.store._state.profilePage.postsData}/>}/>
                <Route path='/dialogs' render={() => <Dialogs
                    dialogsData={props.store._state.dialogsPage.dialogsData}
                    messagesData={props.store._state.dialogsPage.messagesData}/>}
                />
                <Route path='/news' render={() => <News/>}/>
                <Redirect to={'/profile'}/>
            </div>
        </div>
    );
}


