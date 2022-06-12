import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.main} src="https://7wallpapers.net/wp-content/uploads/Francesco-Totti-13.jpg" alt="hi"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
};