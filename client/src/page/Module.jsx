import React, {useContext} from 'react';
import Input from "../components/UI/input/Input";
import '../style/module.css'
import icon from "../img/icon/icon-globe.svg";
import Button from "../components/UI/button/Button";
import ModuleCardList from "../components/moduleCardList/ModuleCardList";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Module = observer( () => {
    const {module} = useContext(Context);

    // const card = {id: 2, sideOne: 'ewfdewf', sideTwo: 'уааукпукипм'}

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
                        <Button>Повторение</Button>
                    </div>
                    <div className="button-container">
                        <Button>Заучивание</Button>
                    </div>
                    <div className="button-container">
                        <Button>Тест</Button>
                    </div>
                    <div className="button-container">
                        <Button>lorem</Button>
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