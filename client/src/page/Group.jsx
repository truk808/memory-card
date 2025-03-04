import React, {useContext, useState} from 'react';
import '../style/group.css'
import GroupList from "../components/groupList/GroupList";
import ModuleList from "../components/moduleList/ModuleList";
import Button from "../components/UI/button/Button";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import iconPlus from "../img/icon/icon-plus.svg"
import iconAddGroup from "../img/icon/icon-add-group.svg"
import AddModule from "../components/addModule/AddModule";
import AddGroup from "../components/addGruop/AddGroup";

const Group = observer(() => {
    const [moduleModalActive, setModuleModalActive] = useState(false);
    const [groupModalActive, setGroupModalActive] = useState(false);
    const {group} = useContext(Context);
    const modules = group.getUngroupedModules()

    return (
        <div className="page">
            <div className="page-wrapper">
                <div className="title moduleList-title">
                    <h1 className='h1-title-text'>Модули</h1>
                    <div className="title-button-wrapper">
                        <div className="title-button-container">
                            <Button icon={iconPlus} className={'blue'} onClick={() => setModuleModalActive(true)}>Создать модуль</Button>
                        </div>
                        <div className="title-button-container">
                            <Button icon={iconAddGroup} className={'purple'} onClick={() => setGroupModalActive(true)}>Создать группу</Button>
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
            <AddModule modalActive={moduleModalActive} setModalActive={setModuleModalActive} group={group}/>
            <AddGroup modalActive={groupModalActive} setModalActive={setGroupModalActive} group={group}/>
        </div>
    );
});

export default Group;