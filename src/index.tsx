import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";
import {Provider} from "./StoreContext";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={state}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
state.subscribe(rerenderEntireTree);