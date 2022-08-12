import {connect} from "react-redux";
import {
    followTC,
    getUsersTC,
    setCurrentPageAC,
    setTotalUserCountAC,
    unfollowTC,
    UsersReducerPagePropsType
} from "../../../redux/users-reducer";
import {RootType} from "../../../redux/redux-store";
import {Users} from "./Users";
import React from "react";
import {Preloader} from "../../../common/Preloader";

export class UsersApiContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.getUsersTC(currentPage, this.props.usersPage.pageSize)
    }

    render() {
        return <div>
            {this.props.usersPage.isFetching
                ? <Preloader/>
                : null
            }
            <Users
                onPageChanged={this.onPageChanged}
                totalUserCount={this.props.usersPage.totalUserCount}
                users={this.props.usersPage.users}
                pageSize={this.props.usersPage.pageSize}
                currentPage={this.props.usersPage.currentPage}
                followingInProgress={this.props.usersPage.followingInProgress}
                unfollowTC={this.props.unfollowTC}
                followTC={this.props.followTC}
            />
        </div>
    }
}

type MapStatePropsType = {
    usersPage: UsersReducerPagePropsType
}
type MapDispatchPropsType = {
    setCurrentPage: (page: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    unfollowTC: (id: number) => void
    followTC: (id: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        usersPage: state.UsersPage
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    setTotalUserCount: setTotalUserCountAC,
    getUsersTC: getUsersTC,
    unfollowTC: unfollowTC,
    followTC: followTC
})(UsersApiContainer);