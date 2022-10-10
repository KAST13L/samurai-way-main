import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type ActionsType = ReturnType<typeof setUserDataAC> | ReturnType<typeof setCaptchaAC>

export type AuthUserDataType = {
    id: number | string | null
    login: null | string
    email: null | string
    isAuth: boolean
    captcha: string | null
}

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
}

export const AuthReducer = (state: AuthUserDataType = initialState, action: ActionsType): AuthUserDataType => {
    switch (action.type) {
        case "auth/SET_USER_DATA":
            return {...state, id: action.id, email: action.email, login: action.login, isAuth: action.isAuth, captcha: action.captcha}
        case "auth/GET_CAPTCHA":
            return {...state, captcha: action.captcha}
        default:
            return state
    }
}

export const setUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean, captcha: string | null) => ({
    type: 'auth/SET_USER_DATA' as const,
    id,
    login,
    email,
    isAuth,
    captcha
})
export const setCaptchaAC = (captcha: string) => ({type:'auth/GET_CAPTCHA' as const, captcha})

export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserDataAC(id, login, email, true, null))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean = false) => async (dispatch: Dispatch | any) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaTC())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'email or login is incorrect'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false, null))
    }
}

export const getCaptchaTC = () => async (dispatch: Dispatch) => {
    const response = await authAPI.getCaptcha()
    const captchaUrl = response.data.url
    dispatch(setCaptchaAC(captchaUrl))
}