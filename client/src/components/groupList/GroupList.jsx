import React from 'react';
import GroupItem from "../groupItem/GroupItem";
import {observer} from "mobx-react-lite";
import styles from "./groupList.module.css"

const GroupList = observer(({groups}) => {
    const handleGroupItemChange = (id) => {
        groups.setGroupsSelected(id);
    }
    return (
        <div>
            {groups.groups.map(group => (
                <GroupItem
                    modules={groups.getModulesByGroup(group.id)}
                    active={groups.groupsSelected.indexOf(group.id) !== -1}
                    onClick={() => handleGroupItemChange(group.id)}
                    key={group.id}
                    group={group}
                    groups={groups}/>
            ))}
        </div>
    );
});

export default GroupList;