import React from 'react';
import ModuleList from "../../components/moduleList/ModuleList"
import {observer} from "mobx-react-lite";

const GroupItem = ({group, groups, style, active, onClick}) => {
    const modules = groups.getModulesByGroup(group.id);
    return (
        <div style={style} onClick={onClick}>
            <h1>{group.name}</h1>
            {active ? <ModuleList
                modules={modules}
                groups={groups}/> : null}
        </div>
    );
};

export default GroupItem;