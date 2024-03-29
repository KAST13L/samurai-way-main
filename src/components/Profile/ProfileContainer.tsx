import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootType} from "../../redux/redux-store";
import {
    getUserProfileTC,
   savePhoto,
    setStatusTC, updateProfileInfoTC,
    updateStatusTC,
    UserProfileInfoType
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<ParamsWithRouterType>
type ParamsWithRouterType = {
    userId: string | undefined
}
type MapStatePropsType = {
    profile: UserProfileInfoType | null
    status: string
}
type MapDispatchPropsType = {
    getUserProfileTC: (userId: string ) => void
    setStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
    updateProfileInfoTC: (profile: UserProfileInfoType) => void
    savePhoto: (photo: any) => void
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '1079'
        }
        this.props.getUserProfileTC(userId)
        this.props.setStatusTC(userId)
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>) {

    }

    render() {
        return <Profile
            savePhoto={this.props.savePhoto}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateProfileInfoTC={this.props.updateProfileInfoTC}
            updateStatusTC={this.props.updateStatusTC}/>
    }
}

const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC,setStatusTC,updateStatusTC,updateProfileInfoTC,savePhoto }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)


