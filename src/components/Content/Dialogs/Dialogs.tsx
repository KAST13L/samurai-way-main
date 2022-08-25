import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const Dialogs = (props: DialogsPropsType) => {

    const onSubmit = (formData: AddMessageFormType) => {
        props.addMessage(formData.message)
    }

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem key={d.id} name={d.name} urlId={d.urlId} imgUrl={d.imgUrl}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <MessageItem key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogsArea}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    <AddNewMessageReduxForm onSubmit={onSubmit}/>
                </div>
                {messagesElements}
            </div>
        </div>
    );
};


type AddMessageFormType = {
    message: string
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'message'} component={'input'} placeholder={'message...'}/>
            <button>Send</button>
        </form>
    )
}

const AddNewMessageReduxForm = reduxForm<AddMessageFormType>({form:'addNewMessage'})(AddMessageForm)


