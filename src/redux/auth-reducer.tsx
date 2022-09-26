import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type ActionsType = ReturnType<typeof setUserDataAC>

export type AuthUserDataType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const AuthReducer = (state: AuthUserDataType = initialState, action: ActionsType): AuthUserDataType => {
    switch (action.type) {
        case "auth/SET_USER_DATA":
            return {...state, id: action.id, email: action.email, login: action.login, isAuth: action.isAuth}
        default:
            return state
    }
}

export const setUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'auth/SET_USER_DATA' as const,
    id,
    login,
    email,
    isAuth
})

export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserDataAC(id, login, email, true))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean = false) => async (dispatch: Dispatch | any) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'email or login is incorrect'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}