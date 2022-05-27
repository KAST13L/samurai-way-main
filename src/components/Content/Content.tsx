import React from 'react';
import s from './Content.module.css'

export const Content = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://7wallpapers.net/wp-content/uploads/Francesco-Totti-13.jpg" alt="hi"/>
            </div>
            <div>
                <div>
                    ava + description
                </div>
                <div>
                    posts component
                </div>
            </div>
        </div>
    );
};

