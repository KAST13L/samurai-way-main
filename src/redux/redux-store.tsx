import {combineReducers, createStore, Store} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialog-reducer";

const reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer

})
export const store = createStore(reducers);

export type RootType = ReturnType<typeof store.getState>

export type AppStoreType = Store<RootType>