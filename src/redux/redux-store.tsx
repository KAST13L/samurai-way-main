import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialog-reducer";

const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer

})
export const store = createStore(rootReducer);

export type RootType = ReturnType<typeof rootReducer>
