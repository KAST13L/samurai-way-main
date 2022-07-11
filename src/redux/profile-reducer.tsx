import React from 'react';
import {ActionTypes, ProfilePageType} from "./state";

const initialState = {
    postsData: [
        {id: 1, message: "Hello my fried!!!"},
        {id: 2, message: "What are you doing?"},
        {id: 3, message: "Lets go to play football, dear Davyd!"}
    ],
    newPostsText: ''
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: Date.now(),
                message: state.newPostsText
            }
            state.postsData.push(newPost);
            state.newPostsText = '';
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostsText = action.text;
            return state
        default:
            return state
    }
};

