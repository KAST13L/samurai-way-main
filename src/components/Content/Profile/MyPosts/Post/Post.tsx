import React, {useState} from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
}

export const Post : React.FC<PostPropsType> = (props) => {

    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img src="https://www.peoples.ru/art/music/pop-pank/evgeniy_milkovsky/ms6ciZ7b5xRcf.jpeg" alt="hi"/>
            </div>
            <div className={s.postBody}>
                {props.message}
            </div>
        </div>
    );
};
