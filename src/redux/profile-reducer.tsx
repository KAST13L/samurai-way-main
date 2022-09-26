import React from 'react';
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type UserProfileInfoType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string | null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string | null,
        github: string,
        mainLink: string | null
    },
    lookingForAJob: true,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string
        large: string
    }
}

const initialState = {
    postsData: [
        {id: 1, message: "Hello my fried!!!"},
        {id: 2, message: "What are you doing?"},
        {id: 3, message: "Lets go to play football, dear Davyd!"}
    ],
    profile: null as UserProfileInfoType | null,
    status: ''
}

export type ProfileReducerPagePropsType = typeof initialState
type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof deletePostAC>

export const ProfileReducer = (state: ProfileReducerPagePropsType = initialState, action: ActionTypes): ProfileReducerPagePropsType => {
    switch (action.type) {
        case "profile/ADD-POST":
            return {
                ...state,
                postsData: [{id: Date.now(), message: action.postMessage}, ...state.postsData],
            }
        case 'profile/SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'profile/SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'profile/DELETE-POST': {
            return {
                ...state,
                postsData: state.postsData.filter(e => e.id !== action.postId)
            }
        }
        default:
            return state
    }
};

export const addPostAC = (postMessage: string) => ({type: 'profile/ADD-POST' as const, postMessage})
export const deletePostAC = (postId: number) => ({type: 'profile/DELETE-POST' as const, postId})
export const setUserProfileAC = (profile: UserProfileInfoType) => ({type: 'profile/SET-USER-PROFILE' as const, profile})
export const setStatusAC = (status: string) => ({type: 'profile/SET_STATUS' as const, status})

export const getUserProfileTC = (userId: string) => async (dispatch: Dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfileAC(data))
}
export const setStatusTC = (userId: string) => async (dispatch: Dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(data))

}
export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    let data = await profileAPI.updateUserStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
