import React, {useContext} from 'react';
import '../style/group.css'
import GroupList from "../components/groupList/GroupList";
import ModuleList from "../components/moduleList/ModuleList";
import Button from "../components/UI/button/Button";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Group = observer(() => {
    const {group} = useContext(Context);
    const modules = group.getUngroupedModules()

    return (
        <div className="moduleList">
            <div className="moduleList-wrapper">
                <div className="title">
                    <h1>Модули</h1>
                    <div className="title-button-wrapper">
                        <p>efeq d</p>
                        <p>efef</p>
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