import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsDataType, MessagesDataType} from "../../../redux/state";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsData.map( d => <DialogItem key={d.id}  name={d.name} urlId={d.urlId} imgUrl={d.imgUrl}/>)
    let messagesElements = props.messagesData.map( m => <MessageItem message={m.message}/>)

    return (
        <div className={s.dialogsArea}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
