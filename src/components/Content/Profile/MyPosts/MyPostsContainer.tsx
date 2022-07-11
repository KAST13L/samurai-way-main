import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../../redux/state";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileReducerPagePropsType} from "../../../../redux/profile-reducer";


type MapStatePropsType = {
    profilePage: ProfileReducerPagePropsType
}
type MapDispatchPropsType = {
    addPost: () => void
    onChangeHandler: (text: string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        profilePage: state.ProfilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => dispatch(addPostAC()),
        onChangeHandler: (text: string) => dispatch(updateNewPostTextAC(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
