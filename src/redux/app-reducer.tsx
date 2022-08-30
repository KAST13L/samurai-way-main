import React from 'react';
import {Dispatch} from "redux";
import {getAuthUserDataTC} from "./auth-reducer";

const initialState = {
   initialized: false
}

type ActionTypes = ReturnType<typeof initializedAC>
export type AppReducerPagePropsType = typeof initialState

export const AppReducer = (state: AppReducerPagePropsType = initialState, action: ActionTypes): AppReducerPagePropsType => {
    switch (action.type) {
        case "INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
};

export const initializedAC = () => ({type:'INITIALIZED' as const })

export const initializedTC = () => (dispatch: Dispatch | any) => {
    const promise = dispatch(getAuthUserDataTC())
    promise.then( () => {
            dispatch(initializedAC())
        })
}
