import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootType} from "../../redux/redux-store";
import {AuthUserDataType, setUserDataAC} from "../../redux/auth-reducer";
import axios from "axios";

type MapStatePropsType = {
    auth: AuthUserDataType
}
type MapDispatchPropsType = {
    setUserData: ( userId: number, email: string, login: string ) => void
}
type HeaderContainerApiPropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainerApi extends React.Component<HeaderContainerApiPropsType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then((response) => {
            if (response.data.resultCode === 0 ){
                let {id, login, email} = response.data.data
                this.props.setUserData(id, login, email)
            }
        })
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

export const HeaderContainer = connect(mapStateToProps, {setUserData: setUserDataAC})(HeaderContainerApi)
