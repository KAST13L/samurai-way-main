import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootType} from "../../../redux/redux-store";
import {setUserProfileAC, UserProfileInfoType} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../../api/api";

type ProfileContainerApiPropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<ParamsWithRouterType>
type ParamsWithRouterType = {
    userId: string | undefined
}
type MapStatePropsType = {
    profile: UserProfileInfoType | null
}
type MapDispatchPropsType = {
    setUserProfileInfo: (profile: UserProfileInfoType ) => void
}

export class ProfileContainerApi extends React.Component<ProfileContainerApiPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        getUserProfile(userId).then((data) => {
            this.props.setUserProfileInfo(data)
        })
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

export const ProfileContainer = connect(mapStateToProps, {setUserProfileInfo: setUserProfileAC})(ProfileContainerWithRouter);
