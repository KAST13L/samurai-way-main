import {connect} from "react-redux";
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUserCount,
    SetUsersAC,
    UnFollowAC,
    UsersReducerPagePropsType,
    UserType
} from "../../../redux/users-reducer";
import {Dispatch} from "redux";
import {RootType} from "../../../redux/redux-store";
import {Users} from "./Users";
import React from "react";
import axios from "axios";

export class UsersApiContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then((response) => {
            this.props.setUser(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }
    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`).then((response) => {
            this.props.setUser(response.data.items)
        })
    }

    render() {

        return <Users
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            totalUserCount={this.props.usersPage.totalUserCount}
            users={this.props.usersPage.users}
            pageSize={this.props.usersPage.pageSize}
            currentPage={this.props.usersPage.currentPage}
        />;
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
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        usersPage: state.UsersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (id: number)=>{
            dispatch(FollowAC(id))
        },
        unfollow: (id: number)=>{
            dispatch(UnFollowAC(id))
        },
        setUser: (users: Array<UserType>) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(SetCurrentPageAC(page))
        },
        setTotalUserCount: (totalUserCount: number) => {
            dispatch(SetTotalUserCount(totalUserCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);