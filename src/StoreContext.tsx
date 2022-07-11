import React from "react";
import {RootStoreDataType} from "./redux/state";

export const StoreContext = React.createContext({} as RootStoreDataType)

export type ProviderType = {
    store: RootStoreDataType
    children: any
}
// sad
export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}