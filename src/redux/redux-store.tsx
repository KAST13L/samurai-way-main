import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialog-reducer";
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";

const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer
})
export const store = createStore(rootReducer);

export type RootType = ReturnType<typeof rootReducer>
