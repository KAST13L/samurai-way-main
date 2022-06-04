import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.main} src="https://7wallpapers.net/wp-content/uploads/Francesco-Totti-13.jpg" alt="hi"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

