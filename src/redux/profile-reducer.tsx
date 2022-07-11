import React from 'react';
import {ActionTypes} from "./state";

const initialState = {
    postsData: [
        {id: 1, message: "Hello my fried!!!"},
        {id: 2, message: "What are you doing?"},
        {id: 3, message: "Lets go to play football, dear Davyd!"}
    ],
    newPostsText: ''
}

export type ProfileReducerPagePropsType = typeof initialState

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
        default:
            return state
    }
};

