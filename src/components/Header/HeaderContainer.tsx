import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootType} from "../../redux/redux-store";
import {AuthUserDataType, getAuthUserDataTC, logoutTC} from "../../redux/auth-reducer";

type MapStatePropsType = {
    auth: AuthUserDataType
}
type MapDispatchPropsType = {
    getAuthUserDataTC: () => void
    logoutTC: () => void
}
type HeaderContainerApiPropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainerApi extends React.Component<HeaderContainerApiPropsType> {

    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

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
    getAuthUserDataTC: getAuthUserDataTC,
    logoutTC: logoutTC
})(HeaderContainerApi)
