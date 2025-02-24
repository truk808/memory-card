import React, {useContext} from 'react';
import '../style/group.css'
import GroupList from "../components/groupList/GroupList";
import ModuleList from "../components/moduleList/ModuleList";
import Button from "../components/UI/button/Button";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import iconPlus from "../img/icon/icon-plus.svg"
import iconAddGroup from "../img/icon/icon-add-group.svg"

const Group = observer(() => {
    const {group} = useContext(Context);
    const modules = group.getUngroupedModules()

    return (
        <div className="moduleList">
            <div className="moduleList-wrapper">
                <div className="moduleList-title">
                    <h1 className='title'>Модули</h1>
                    <div className="title-button-wrapper">
                        <div className="title-button-container">
                            <Button icon={iconPlus} className={'blue'}>Создать модуль</Button>
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
        </div>
    );
});

export default Group;