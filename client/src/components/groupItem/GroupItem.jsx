import React from 'react';
import styles from './groupItem.module.css'
import ModuleList from "../../components/moduleList/ModuleList"
import arrowDown from "../../img/icon/icon-arrow-downsvg.svg"
import arrowRight from "../../img/icon/icon-arrow-right.svg"
import {observer} from "mobx-react-lite";
import iconChange from "../../img/icon/icon-pencil.svg"

const GroupItem = observer(({group, groups, modules, active, onClick, setGroupModalActive, setSelectedGroup}) => {

    const click = (e) => {
        e.stopPropagation();
        const groupInfo = [
            group.id,
            group.name,
        ]
        setSelectedGroup(groupInfo);
        setGroupModalActive(true)
    }

    return (
        <div className={styles.groupItem} onClick={onClick}>
            <div className={styles.titleHeader}>
                <div className={styles.title}>
                    <img src={active ? arrowDown : arrowRight} alt=""/>
                    <h1 className={styles.titleText}>{group.name}</h1>
                </div>
                <img src={iconChange} alt="" className={styles.icon} onClick={(e) => click(e)}/>
            </div>
            <div className={active ? [styles.moduleList, styles.active].join(' ') : styles.moduleList}>
                {active ? <ModuleList
                    modules={modules}
                    groups={groups}/> : null}
            </div>
        </div>
    );
});

export default GroupItem;