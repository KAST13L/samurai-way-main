import React from 'react';
import {addMessageAC, DialogsReducerPagePropsType, updateNewMessageTextAC} from "../../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {RootType} from "../../../redux/redux-store";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

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
        dialogsPage: state.DialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        onChangeHandler: (text: string) => dispatch(updateNewMessageTextAC(text))
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter,
)(Dialogs)
