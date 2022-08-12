import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootType} from "../../redux/redux-store";
import {AuthUserDataType, getAuthUserDataTC} from "../../redux/auth-reducer";

type MapStatePropsType = {
    auth: AuthUserDataType
}
type MapDispatchPropsType = {
    getAuthUserDataTC: () => void
}
type HeaderContainerApiPropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainerApi extends React.Component<HeaderContainerApiPropsType>{

    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return <Header authData={this.props.auth}/>
    }
}


const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        auth: state.Auth
    }
}

export const HeaderContainer = connect(mapStateToProps, {getAuthUserDataTC: getAuthUserDataTC})(HeaderContainerApi)
