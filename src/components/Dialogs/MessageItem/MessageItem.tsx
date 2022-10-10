import s from "./MessageItem.module.css";
import React from "react";

type MessageItemPropsType = {
    message: string
}

export const MessageItem = (props: MessageItemPropsType) => {
    return <div className={s.message}> - {props.message}<hr/></div>
}