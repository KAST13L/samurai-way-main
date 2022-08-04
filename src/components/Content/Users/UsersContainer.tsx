import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setFollowingInProgressAC,
    setToggleIsFetchingAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UsersReducerPagePropsType,
    UserType
} from "../../../redux/users-reducer";
import {RootType} from "../../../redux/redux-store";
import {Users} from "./Users";
import React from "react";
import {Preloader} from "../../../common/Preloader";
import {getUsers} from "../../../api/api";

export class UsersApiContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)

            getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then((data) => {
                this.props.setToggleIsFetching(false)
                this.props.setUser(data.items)
                this.props.setTotalUserCount(data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(page)
        getUsers(page, this.props.usersPage.pageSize).then((data) => {
            this.props.setToggleIsFetching(false)
            this.props.setUser(data.items)
        })

    }

    render() {
        return <div>
            {this.props.usersPage.isFetching
                ? <Preloader/>
                : null
            }
            <Users
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalUserCount={this.props.usersPage.totalUserCount}
                users={this.props.usersPage.users}
                pageSize={this.props.usersPage.pageSize}
                currentPage={this.props.usersPage.currentPage}
                setFollowingInProgress={this.props.setFollowingInProgress}
                followingInProgress={this.props.usersPage.followingInProgress}

            />
        </div>
    }
}

type MapStatePropsType = {
    usersPage: UsersReducerPagePropsType
}
type MapDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUser: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    setFollowingInProgress: (followingInProgress: boolean, userId: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        usersPage: state.UsersPage
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unFollowAC,
    setUser: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUserCount: setTotalUserCountAC,
    setToggleIsFetching: setToggleIsFetchingAC,
    setFollowingInProgress: setFollowingInProgressAC
})(UsersApiContainer);