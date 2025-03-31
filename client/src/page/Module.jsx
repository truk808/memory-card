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
import {CARD_ROUTE, GROUP_ROUTE} from "../utils/consts";
import { useNavigate } from "react-router-dom";
import {deleteModule, getModules, getOneModule, updateModule} from "../http/moduleAPI";
import {createCard, getCardsFromModules} from "../http/cardAPI";
import {computed} from "mobx";

const Module = observer( () => {
    const navigate = useNavigate();
    const location = useLocation();
    const moduleId = location.pathname.split('/')[2]
    const {module} = useContext(Context);
    const {group} = useContext(Context);

    const handleAddCard = () => {
        createCard(moduleId).then((data) => {
            module.setCards([...module.cards, data]);
        });
    }

    const handleValueChange = (valueModule) => (e) => {
        console.log('rgvrgrg')
        const newModule = {
            ...module,
            [valueModule]: e.target.value
        }

        updateModule(newModule, module.module.id).then(data => {
            module.setModule(data);
        })

        module.updateModule(e.target.value)
    }

    const handleDeleteClick = (moduleId) => {
        deleteModule(moduleId).then(() => {
            group.removeModule(moduleId);
        })
        navigate(GROUP_ROUTE)
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
                <button onClick={() => handleDeleteClick(moduleId)}> Удалить</button>
                <div className="module-title">
                    <img src={icon} alt="" className="moudule-img"/>
                    <div className="input-container">
                        <Input value={module.module.name} onChange={handleValueChange('name')}/>
                    </div>
                    {/*<div className="input-container">*/}
                    {/*    <Input value={module.module.description} onChange={handleValueChange('description') }/>*/}
                    {/*</div>*/}
                </div>
                {/*дестр*/}
                <div className="buttons-wrapper">
                    <div className="button-container">
                        <Container><Button onClick={() => redirectToTraining('repeat')}>Повторение</Button></Container>
                    </div>
                    <div className="button-container">
                        <Container><Button
                            onClick={() => redirectToTraining('memorization')}>Заучивание</Button></Container>
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
                <button className="add-card-button" onClick={() => {
                    handleAddCard()
                }}>
                    +
                </button>
            </div>
        </div>
    );
});

export default Module;