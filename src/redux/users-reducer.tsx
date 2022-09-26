import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type ActionsType =
    ReturnType<typeof setToggleIsFetchingAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setFollowingInProgressAC>

const initialState: UsersReducerPagePropsType = {
    users: [],
    pageSize: 50,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
export type UsersReducerPagePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<number>
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName?: string | null,
    photos: {
        small: string | null,
        large?: string | null
    },
    status: string | null,
    followed: boolean
}

export const UsersReducer = (state: UsersReducerPagePropsType = initialState, action: ActionsType): UsersReducerPagePropsType => {
    switch (action.type) {
        case "users/SET_USERS":
            return {...state, users: action.users}
        case "users/SET_CURRENT_PAGE":
            return {...state, currentPage: action.page}
        case "users/FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case "users/UN_FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        case "users/SET_TOTAL_USER_COUNT":
            return {...state, totalUserCount: action.totalUserCount}
        case "users/SET_TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case 'users/SET_FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followAC = (id: number) => ({type: 'users/FOLLOW' as const, id})
export const unfollowAC = (id: number) => ({type: 'users/UN_FOLLOW' as const, id})
export const setUsersAC = (users: Array<UserType>) => ({type: 'users/SET_USERS' as const, users})
export const setCurrentPageAC = (page: number) => ({type: 'users/SET_CURRENT_PAGE' as const, page})
export const setTotalUserCountAC = (totalUserCount: number) => ({type: 'users/SET_TOTAL_USER_COUNT' as const, totalUserCount})
export const setToggleIsFetchingAC = (isFetching: boolean) => ({type: 'users/SET_TOGGLE_IS_FETCHING' as const, isFetching})
export const setFollowingInProgressAC = (followingInProgress: boolean, userId: number) => ({
    type: 'users/SET_FOLLOWING_IN_PROGRESS' as const,
    followingInProgress,
    userId
})

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setToggleIsFetchingAC(true))
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
        dispatch(setUsersAC(data.items))
        dispatch(setTotalUserCountAC(data.totalCount))
        dispatch(setToggleIsFetchingAC(false))
    })
}
export const unfollowTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgressAC(true, id))
    usersAPI.unfollowAxios(id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unfollowAC(id))
            dispatch(setFollowingInProgressAC(false, id))
        }
    })
}
export const followTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgressAC(true, id))
    usersAPI.followAxios(id).then((data) => {
        if (data.resultCode === 0) {
            dispatch(followAC(id))
            dispatch(setFollowingInProgressAC(false, id))
        }
    })
}