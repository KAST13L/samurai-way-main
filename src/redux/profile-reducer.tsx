import React from 'react';
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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
    newPostsText: '',
    profile: null as UserProfileInfoType | null
}

export type ProfileReducerPagePropsType = typeof initialState
type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof setUserProfileAC>

export const ProfileReducer = (state: ProfileReducerPagePropsType = initialState, action: ActionTypes): ProfileReducerPagePropsType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                postsData: [{id: Date.now(), message: state.newPostsText}, ...state.postsData],
                newPostsText: ''
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostsText: action.text
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
};

export const addPostAC = () => ({type:'ADD-POST' as const})
export const updateNewPostTextAC = (text: string) => ({type:'UPDATE-NEW-POST-TEXT' as const, text })
export const setUserProfileAC = (profile: UserProfileInfoType) => ({type:'SET-USER-PROFILE' as const, profile })

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getUserProfile(userId).then((data) => {
        dispatch(setUserProfileAC(data))
    })
}