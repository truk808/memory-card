import React, {useContext, useEffect} from 'react';
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
import {getModules, getOneModule} from "../http/moduleAPI";
import {createCard, getCardsFromModules} from "../http/cardAPI";

const Module = observer( () => {
    const navigate = useNavigate();
    const location = useLocation();
    const moduleId = location.pathname.split('/')[2]
    const {module} = useContext(Context);

    // module.setCard(  {id: 6,
    //     img: "7e4f85bd-4fa2-4cc4-9e02-277b9c990c5b.jpg",
    //     moduleId: 1,
    //     side_one: "der Mensh",
    //     side_two: "человек",})

    const handleAddCard = () => {
        createCard(moduleId).then((data) => {
            module.setCards([...module.cards, data]);
        });
    }

    const redirectToTraining = (nameTraining) => {
        navigate(`${CARD_ROUTE}?nameTraining=${nameTraining}`);
    }

    useEffect(() => {
        getOneModule(moduleId).then((data) => {
            module.setModule(data);
        });
        getCardsFromModules(moduleId).then((data) => {
            module.setCards(data);
        })
    }, []);

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
                        <Container><Button onClick={() => redirectToTraining('repeat')}>Повторение</Button></Container>
                    </div>
                    <div className="button-container">
                        <Container><Button onClick={() => redirectToTraining('memorization')}>Заучивание</Button></Container>
                    </div>
                    <div className="button-container">
                        <Container><Button onClick={() => redirectToTraining('test')}>Тест</Button></Container>
                    </div>
                    <div className="button-container">
                        <Container><Button>lorem</Button></Container>
                    </div>
                    {/*дестр*/}
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