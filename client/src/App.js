import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import React, {useContext, useEffect, useState} from "react";
import './style/app.css'
import Header from "./components/header/Header";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {check} from "./http/userAPI";
import Spinner from "./components/UI/loading/Spiner";

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check().then((data) => {
            console.log(data)
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <BrowserRouter>
                {user.isAuth && <Header/>}
                <AppRouter/>
            </BrowserRouter>
        </>
    );
})

export default App;
