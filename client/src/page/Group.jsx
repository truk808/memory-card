import React, {useContext, useState} from 'react';
import '../style/group.css'
import GroupList from "../components/groupList/GroupList";
import ModuleList from "../components/moduleList/ModuleList";
import Button from "../components/UI/button/Button";
import Modal from "../components/UI/modal/Modal"
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import iconPlus from "../img/icon/icon-plus.svg"
import iconAddGroup from "../img/icon/icon-add-group.svg"

const Group = observer(() => {
    const [modalActive, setModalActive] = useState(true);
    const {group} = useContext(Context);
    const modules = group.getUngroupedModules()

    return (
        <div className="page">
            <div className="page-wrapper">
                <div className="title moduleList-title">
                    <h1 className='h1-title-text'>Модули</h1>
                    <div className="title-button-wrapper">
                        <div className="title-button-container">
                            <Button icon={iconPlus} className={'blue'} onClick={() => setModalActive(true)}>Создать модуль</Button>
                        </div>
                        <div className="title-button-container">
                            <Button icon={iconAddGroup} className={'purple'}>Создать группу</Button>
                        </div>
                    </div>
                </div>
                <div className="group-wrapper">
                    <GroupList groups={group} />
                </div>
                <hr className='separation'/>
                <div className="module-wrapper">
                    <ModuleList modules={modules} />
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur, dolorum eum labore nobis optio quibusdam quidem rem sunt tempore? Est eum magnam minima natus.</p>
            </Modal>
        </div>
    );
});

export default Group;