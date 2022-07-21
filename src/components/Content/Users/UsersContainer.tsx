import {connect} from "react-redux";
import {FollowAC, SetUsersAC, UnFollowAC, UsersReducerPagePropsType, UserType} from "../../../redux/users-reducer";
import {Dispatch} from "redux";
import {RootType} from "../../../redux/redux-store";
import {Users} from "./Users";

type MapStatePropsType = {
    usersPage: UsersReducerPagePropsType
}
type MapDispatchPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUser: (users: Array<UserType>) => void
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);