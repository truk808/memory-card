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
import { useNavigate } from "react-router-dom";

const Module = observer( () => {
    const navigate = useNavigate();
    const location = useLocation();
    const moduleId = location.pathname.split('/')[2]

    const {module} = useContext(Context);

    const handleAddCard = () => {
        const newCard = {
            id: Date.now(),
            sideOne: "",
            sideTwo: ""
        }
        module.setCards([...module.cards, newCard]);
    }

    return (
        <div className="page">
            <div className="module-wrapper">
                <div className="module-title">
                    <img src={icon} alt="" className="moudule-img"/>
                    <div className="input-container">
                        <Input value={module.module.name} onChange={(e) => module.updateModule(e.target.value)}/>
                    </div>
                </div>
                {/*дестр*/}
                <div className="buttons-wrapper">
                    <div className="button-container">
                        <Container><Button onClick={() => navigate(CARD_ROUTE)}>Повторение</Button></Container>
                    </div>
                    <div className="button-container">
                        <Container><Button onClick={() => navigate(CARD_ROUTE)}>Заучивание</Button></Container>
                    </div>
                    <div className="button-container">
                        <Container><Button onClick={() => navigate(CARD_ROUTE)}>Тест</Button></Container>
                    </div>
                    <div className="button-container">
                        <Container><Button>lorem</Button></Container>
                    </div>
                </div>
                <div className="card-wrapper">
                    <hr className='separation'/>
                    <ModuleCardList module={module} cards={module.cards}/>
                    <hr className='separation'/>
                </div>
                <button className="add-card-button" onClick={() => {handleAddCard()}}>
                    +
                </button>
            </div>
        </div>
    );
});

export default Module;