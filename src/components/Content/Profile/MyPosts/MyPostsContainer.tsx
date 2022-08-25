import React from 'react';
import {addPostAC, ProfileReducerPagePropsType} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootType} from "../../../../redux/redux-store";


type MapStatePropsType = {
    profilePage: ProfileReducerPagePropsType
}
type MapDispatchPropsType = {
    addPost: (postMessage: string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        profilePage: state.ProfilePage
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost: addPostAC})(MyPosts);
