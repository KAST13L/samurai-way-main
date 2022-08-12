import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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
        case "SET_USER_DATA":
            return {...state, id: action.id, email: action.email, login: action.login, isAuth: true}
        default:
            return state
    }
}

export const setUserDataAC = (id: number, login: string, email: string) => ({type:'SET_USER_DATA' as const, id, login, email })

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.me().then((response) => {
        if (response.data.resultCode === 0 ){
            let {id, login, email} = response.data.data;
            dispatch(setUserDataAC(id, login, email))
        }
    })
}