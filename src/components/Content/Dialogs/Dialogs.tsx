import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {

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
            props.onChangeHandler(text)
        }
    }

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} urlId={d.urlId} imgUrl={d.imgUrl}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <MessageItem key={m.id} message={m.message}/>)

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
