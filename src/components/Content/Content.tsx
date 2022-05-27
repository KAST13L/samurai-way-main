import React from 'react';
import s from './Content.module.css'
import {Profile} from "./Profile/Profile";
import {MyPosts} from "./Profile/MyPosts/MyPosts";

export const Content = () => {
    return (
        <div className={s.content}>
            <Profile/>
            <MyPosts/>
        </div>
    );
};

