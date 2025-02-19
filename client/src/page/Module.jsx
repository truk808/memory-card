import React from 'react';
import Input from "../components/UI/input/Input";
import '../style/module.css'
import icon from "../img/icon/icon-globe.svg";
import Button from "../components/UI/button/Button";
import ModuleCard from "../components/UI/card/ModuleCard";

const Module = () => {
    return (
        <div className="module">
            <div className="module-wrapper">
                <div className="module-title">
                    <img src={icon} alt="" className="moudule-img"/>
                    <div className="input-container">
                        <Input/>
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
                    <ModuleCard />
                    <ModuleCard />
                    <ModuleCard />
                    <ModuleCard />
                    <hr className='separation'/>
                </div>
            </div>
        </div>
    );
};

export default Module;