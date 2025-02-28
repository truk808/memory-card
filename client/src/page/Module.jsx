import React, {useContext} from 'react';
import Input from "../components/UI/input/Input";
import '../style/module.css'
import icon from "../img/icon/icon-globe.svg";
import Button from "../components/UI/button/Button";
import ModuleCardList from "../components/moduleCardList/ModuleCardList";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useLocation} from "react-router-dom";
import Container from "../components/UI/container/Container";
import {CARD_ROUTE} from "../utils/consts";

const Module = observer( () => {
    const location = useLocation();
    const moduleId = location.pathname.split('/')[2]

    const {module} = useContext(Context);
    return (
        <div className="module">
            <div className="module-wrapper">
                <div className="module-title">
                    <img src={icon} alt="" className="moudule-img"/>
                    <div className="input-container">
                        <Input value={module.module.name} onChange={(e) => module.updateModule(e.target.value)} />
                    </div>
                </div>
                <div className="buttons-wrapper">
                    <div className="button-container">
                        <Container><Button onClick={() => window.location.assign(CARD_ROUTE)}>Повторение</Button></Container>
                    </div>
                    <div className="button-container">
                        <Container><Button>Заучивание</Button></Container>
                    </div>
                    <div className="button-container">
                        <Container><Button>Тест</Button></Container>
                    </div>
                    <div className="button-container">
                        <Container><Button>lorem</Button></Container>
                    </div>
                </div>
                <div className="card-wrapper">
                    <hr className='separation'/>
                        <ModuleCardList module={module} cards={module.cards} />
                    <hr className='separation'/>
                </div>
            </div>
        </div>
    );
});

export default Module;