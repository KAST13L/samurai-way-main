type ActionsType = ReturnType<typeof FollowAC> | ReturnType<typeof UnFollowAC> | ReturnType<typeof SetUsersAC>

const initialState: UsersReducerPagePropsType = {
    users: [

    ]
}
export type UsersReducerPagePropsType = {
    users: Array<UserType>
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName?: string | null,
    photos: {
        small: string | null,
        large?: string | null
    },
    status: string | null,
    followed: boolean
}

export const UsersReducer = (state: UsersReducerPagePropsType = initialState, action: ActionsType): UsersReducerPagePropsType => {
    switch (action.type) {
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case "UN_FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        default:
            return state
    }
}

export const FollowAC = (id: number) => ({type: 'FOLLOW' as const, id})
export const UnFollowAC = (id: number) => ({type: 'UN_FOLLOW' as const, id})
export const SetUsersAC = (users: Array<UserType> ) => ({type: 'SET_USERS' as const, users})