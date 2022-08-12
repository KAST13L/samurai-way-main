import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootType} from "../../../redux/redux-store";
import {getUserProfileTC, UserProfileInfoType} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerApiPropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<ParamsWithRouterType>
type ParamsWithRouterType = {
    userId: string | undefined
}
type MapStatePropsType = {
    profile: UserProfileInfoType | null
}
type MapDispatchPropsType = {
    getUserProfileTC: (userId: string ) => void
}

export class ProfileContainerApi extends React.Component<ProfileContainerApiPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        profile: state.ProfilePage.profile
    }
}

let ProfileContainerWithRouter = withRouter(ProfileContainerApi)

export const ProfileContainer = connect(mapStateToProps, {getUserProfileTC: getUserProfileTC})(ProfileContainerWithRouter);
