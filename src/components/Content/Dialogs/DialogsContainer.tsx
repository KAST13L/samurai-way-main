import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/state";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../../StoreContext";


export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const addMessage = () => {
                    store.dispatch(addMessageAC())
                }

                const onChangeHandler = (text: string) => {
                    store.dispatch(updateNewMessageTextAC(text))
                }
                return (
                    <Dialogs dialogsData={store.getState().dialogsPage.dialogsData} messagesData={store.getState().dialogsPage.messagesData} addMessage={addMessage}
                             onChangeContainer={onChangeHandler}/>)
            }}
        </StoreContext.Consumer>

    );
};
