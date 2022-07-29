type ActionsType = ReturnType<typeof FollowAC> |ReturnType<typeof SetTotalUserCount> | ReturnType<typeof UnFollowAC> | ReturnType<typeof SetUsersAC> | ReturnType<typeof SetCurrentPageAC>

const initialState: UsersReducerPagePropsType = {
    users: [],
    pageSize: 50,
    totalUserCount: 0,
    currentPage: 3
}
export type UsersReducerPagePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
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
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state,currentPage: action.page }
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        case "UN_FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
         case "SET_TOTAL_USER_COUNT":
            return {...state, totalUserCount: action.totalUserCount}
        default:
            return state
    }
}

export const FollowAC = (id: number) => ({type: 'FOLLOW' as const, id})
export const UnFollowAC = (id: number) => ({type: 'UN_FOLLOW' as const, id})
export const SetUsersAC = (users: Array<UserType> ) => ({type: 'SET_USERS' as const, users})
export const SetCurrentPageAC = (page: number ) => ({type: 'SET_CURRENT_PAGE' as const, page})
export const SetTotalUserCount = (totalUserCount: number ) => ({type: 'SET_TOTAL_USER_COUNT' as const, totalUserCount})