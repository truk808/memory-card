import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/reset.css'
import UserStore from "./store/UserStore";
import ModuleStore from "./store/ModuleStore";
import GroupStore from "./store/GroupStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        module: new ModuleStore(),
        group: new GroupStore(),
    }}>
        <App/>
    </Context.Provider>
);

