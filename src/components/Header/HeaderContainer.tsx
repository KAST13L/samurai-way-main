import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootType} from "../../redux/redux-store";
import {AuthUserDataType, logoutTC} from "../../redux/auth-reducer";

type MapStatePropsType = {
    auth: AuthUserDataType
}
type MapDispatchPropsType = {
    logoutTC: () => void
}
type HeaderContainerApiPropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainerApi extends React.Component<HeaderContainerApiPropsType> {

    render() {
        return <Header authData={this.props.auth} logoutTC={this.props.logoutTC}/>
    }
}


const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        auth: state.Auth
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    logoutTC: logoutTC
})(HeaderContainerApi)
