import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialog-reducer";
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    form: formReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootType = ReturnType<typeof rootReducer>
