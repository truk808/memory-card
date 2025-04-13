import React, {useEffect, useMemo, useState} from 'react';
import ModuleList from "../moduleList/ModuleList";
import GroupList from "../groupList/GroupList";
import {observer} from "mobx-react-lite";
import styles from "./FilterModules.module.css";

const FilterModules = observer(({searchText, group, setGroupModalActive, setSelectedGroup}) => {
    const [switchActive, setSwitchActive] = useState(false);

    const searchModules = useMemo(() => {
        return group.modules.filter(module => module.name.toLowerCase().includes(searchText.toLowerCase()));
    }, [searchText, group.modules]);

    const toggleSwitch = () => {
        setSwitchActive(prevState => !prevState);
    };

    const modules = useMemo(() => {
        if (switchActive) {
            return group.getUngroupedModules().slice().sort((a, b) => a?.name.localeCompare(b?.name));
        } else {
            return group.modules.slice().sort((a, b) => a?.name.localeCompare(b?.name));
        }
    }, [group.modules, group.groupInModules, switchActive]);


    return (
        <>
            {searchText ? (
                searchModules.length !== 0 ?
                    <ModuleList modules={searchModules} groups={group}/>
                    :
                    <p className={styles.notFound}>Модулей с таким названием не найдено</p>
            ) : (
                <>
                    <GroupList groups={group} setGroupModalActive={setGroupModalActive}
                               setSelectedGroup={setSelectedGroup}/>
                    <hr className="separation"/>
                    <div className={styles.moduleNoGroup}>
                        <div className={styles.title}>
                            <h4 className={styles.titleText}>{switchActive ? "Модули без групп" : "Все модули"}</h4>
                            <label className={styles.switch}>
                                <input type="checkbox" checked={switchActive} onChange={toggleSwitch}/>
                                <span
                                    className={[styles.slider, switchActive ? styles.active : '', styles.round].join(" ")}></span>
                            </label>
                        </div>
                        <ModuleList modules={modules} groups={group}/>
                    </div>
                </>
            )}
        </>
    );
});

export default FilterModules;
