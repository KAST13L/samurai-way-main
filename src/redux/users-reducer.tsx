type ActionsType = ReturnType<typeof FollowAC> | ReturnType<typeof UnFollowAC> | ReturnType<typeof SetUsersAC>
export type UserType = {
    id: number
    followed: boolean
    name:string
    status:string
    location: {
        country:string
        city:string
    }
}
const initialState = {
    users: [
        {id: 1, followed: true, name: 'Davyd', status: 'i am a boss', location: {country: 'Ukraine', city: 'Lviv'}},
        {id: 2, followed: false, name: 'Yana', status: 'i am a boss', location: {country: 'Ukraine', city: 'New York'}},
        {id: 3, followed: false, name: 'Liya', status: 'i am a boss', location: {country: 'Ukraine', city: 'Kharkiv'}},
        {id: 4, followed: false, name: 'Kozak', status: 'i am a boss', location: {country: 'Ukraine', city: 'Mariupol'}}
    ]
}
export type UsersReducerPagePropsType = typeof initialState

export const UsersReducer = (state: UsersReducerPagePropsType = initialState, action: ActionsType): UsersReducerPagePropsType => {
    switch (action.type) {
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        case "FOLLOW":
            debugger
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case "UN_FOLLOW":
            debugger
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        default:
            return state
    }
}

export const FollowAC = (id: number) => ({type: 'FOLLOW' as const, id})
export const UnFollowAC = (id: number) => ({type: 'UN_FOLLOW' as const, id})
export const SetUsersAC = (users: Array<UserType> ) => ({type: 'SET_USERS' as const, users})