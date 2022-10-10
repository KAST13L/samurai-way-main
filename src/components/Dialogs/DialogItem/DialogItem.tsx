import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    urlId: string
    imgUrl: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return <div className={s.dialog}>
        <img src={props.imgUrl} alt="hi"/>
        <NavLink to={`/dialogs/${props.urlId}`}>{props.name}</NavLink>
    </div>
}

