import React, {useContext, useEffect, useState} from 'react';
import '../style/group.css'
import Button from "../components/UI/button/Button";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import iconPlus from "../img/icon/icon-plus.svg"
import iconAddGroup from "../img/icon/icon-add-group.svg"
import AddModule from "../components/addModule/AddModule";
import GroupManager from "../components/groupManager/GroupManager";
import Input from "../components/UI/input/Input";
import FilterModules from "../components/filterModules/FilterModules";
import {getModules} from "../http/moduleAPI";
import {getGroups} from "../http/groupAPI";
import {getGroupModule} from "../http/groupModuleAPI";
import iconSearch from "../img/icon/icons8-поиск 1.svg"

const Group = observer(() => {
    const [searchText, setSearchText] = useState('')
    const [moduleModalActive, setModuleModalActive] = useState(false);
    const [groupModalActive, setGroupModalActive] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState([]);

    const {group} = useContext(Context);
    const {user} = useContext(Context);

    useEffect(() => {
        getGroupModule(user.user.id).then(data => {
            group.setGroupModules(data);
        })
        getGroups(user.user.id).then(data => {
            group.setGroups(data);
        })
        getModules(user.user.id).then(data => {
            group.setModules(data);
        })
    }, []);

    return (
        <div className="page">
            <div className="page-wrapper">
                <div className="title moduleList-title">
                    <h1 className='h1-title-text'>Модули</h1>
                    <div className="title-button-wrapper">
                        <div className="title-button-container">
                            <Button
                                icon={iconPlus}
                                className={'blue'}
                                onClick={() => setModuleModalActive(true)}
                            >
                                Создать модуль
                            </Button>
                        </div>
                        <div className="title-button-container">
                            <Button
                                icon={iconAddGroup}
                                className={'purple'}
                                onClick={() => setGroupModalActive(true)}
                            >
                                Создать группу
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="search-input-container">
                    <Input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder='Поиск модулей'
                        img={iconSearch}
                        className='search'/>
                </div>
                <FilterModules
                    setGroupModalActive={setGroupModalActive}
                    setSelectedGroup={setSelectedGroup}
                    searchText={searchText}
                    group={group}/>
            </div>
            <AddModule
                modalActive={moduleModalActive}
                setModalActive={setModuleModalActive}
                group={group}/>
            <GroupManager
                modalActive={groupModalActive}
                setModalActive={setGroupModalActive}
                groups={group}
                selectedGroup={selectedGroup}
                setSelectedGroup={setSelectedGroup}
            />

        </div>
    );
});

export default Group;