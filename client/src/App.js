import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import React, {useContext} from "react";
import './style/app.css'
import Header from "./components/header/Header";
import {Context} from "./index";

function App() {
    const { user } = useContext(Context);


    return (
        <>
            {user._isAuth && <Header/>}
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </>
    );
}

export default App;
