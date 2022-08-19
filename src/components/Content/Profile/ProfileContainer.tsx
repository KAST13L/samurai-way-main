import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootType} from "../../../redux/redux-store";
import {getUserProfileTC, setStatusTC, updateStatusTC, UserProfileInfoType} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

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
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '20163'
        }
        this.props.getUserProfileTC(userId)
        this.props.setStatusTC(userId)
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status ) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatusTC={this.props.updateStatusTC}/>
    }
}

const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC,setStatusTC,updateStatusTC }),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)


