import React from 'react';
import styles from './groupItem.module.css'
import ModuleList from "../../components/moduleList/ModuleList"
import arrowDown from "../../img/icon/icon-arrow-downsvg.svg"
import arrowRight from "../../img/icon/icon-arrow-right.svg"

const GroupItem = ({group, groups, modules, active, onClick}) => {
    return (
        <div className={styles.groupItem} onClick={onClick}>
            <div className={styles.title}>
                <img src={active ? arrowDown : arrowRight} alt=""/>
                <h1 className={styles.titleText}>{group.name}</h1>
            </div>
            <div className={active ? [styles.moduleList, styles.active].join(' ') : styles.moduleList}>
                {active ? <ModuleList
                    modules={modules}
                    groups={groups}/> : null}
            </div>
        </div>
    );
};

export default GroupItem;