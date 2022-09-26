import React from 'react';
import s from "./App.module.css"
import {Navbar} from "./components/Navbar/Navbar";
import {Redirect, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Content/Login/Login";
import {News} from "./components/Content/News/News";
import {connect} from "react-redux";
import {RootType} from "./redux/redux-store";
import {compose} from "redux";
import {Preloader} from "./common/Preloader";
import {initializedTC} from "./redux/app-reducer";

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializedTC()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
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
}

type MapDispatchPropsType = {
    initializedTC: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
type AppPropsType = MapStateToPropsType & MapDispatchPropsType
const mapStateToProps = (state: RootType): MapStateToPropsType => ({
        initialized: state.AppPage.initialized
    })




export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializedTC}),
)(App)
