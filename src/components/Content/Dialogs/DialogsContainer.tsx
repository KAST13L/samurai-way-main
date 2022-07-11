import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/state";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootType} from "../../../redux/redux-store";
import {DialogsReducerPagePropsType} from "../../../redux/dialog-reducer";

type MapStatePropsType = {
    dialogsPage: DialogsReducerPagePropsType
}
type MapDispatchPropsType = {
    addMessage: () => void
    onChangeHandler: (text: string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        dialogsPage: state.DialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        onChangeHandler: (text: string) => dispatch(updateNewMessageTextAC(text))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
