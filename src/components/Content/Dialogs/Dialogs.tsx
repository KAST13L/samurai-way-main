import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsDataType, MessagesDataType} from "../../../redux/state";

type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    addMessage: () => void
    onChangeContainer: (text: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let newMessageText = React.createRef<HTMLInputElement>()

    const addMessage = () => {
        if (newMessageText.current) {
            props.addMessage()
            newMessageText.current.value = ''
        }
    }

    const onChangeHandler = () => {
        if (newMessageText.current) {
            let text = newMessageText.current.value
            props.onChangeContainer(text)
        }
    }

    let dialogsElements = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} urlId={d.urlId}
                                                                 imgUrl={d.imgUrl}/>)
    let messagesElements = props.messagesData.map(m => <MessageItem key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogsArea}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <input type="text"
                       ref={newMessageText}
                       onChange={onChangeHandler}
                       placeholder={'message...'}
                />
                <button onClick={addMessage}>Send</button>
                {messagesElements}
            </div>

        </div>
    );
};
