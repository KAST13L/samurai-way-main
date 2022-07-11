import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../../redux/state";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../../StoreContext";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store.dispatch(addPostAC())
                }
                const onChangeHandler = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return (
                    <MyPosts
                        postsData={store.getState().profilePage.postsData}
                        addPost={addPost}
                        onChangeHandler={onChangeHandler}
                    />
                )
            }}
        </StoreContext.Consumer>

    );
};

