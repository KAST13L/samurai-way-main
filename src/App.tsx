import React from 'react';
import s from "./App.module.css"
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {Profile} from "./components/Content/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/Content/News/News";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Navbar/>
            <div className={s.content}>
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/news' component={News}/>
            </div>
        </div>
    );
}

export default App;
