import React, {useContext, useEffect, useMemo} from 'react';
import Modal from "../UI/modal/Modal";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import styles from "./GroupManager.module.css"
import iconPlus from "../../img/icon/icon-plus.svg";
import CheckModule from "../checkModule/CheckModule";
import {createGroup, deleteGroup, updateGroup} from "../../http/groupAPI";
import {Context} from "../../index";
import {createGroupModule, deleteGroupModule, getOneGroupModules} from "../../http/groupModuleAPI";
import group from "../../page/Group";
import {login} from "../../http/userAPI";

const GroupManager = ({modalActive, setModalActive, groups, selectedGroup, setSelectedGroup}) => {
    const {user} = useContext(Context);
    const [name, setName] = React.useState('');
    const [modulesId, setModulesId] = React.useState([]);

    useEffect(() => {
        if(!modalActive) {
            setSelectedGroup([])
            setName('')
            setModulesId([])
        }
    }, [modalActive])

    useEffect(() => {
        if(selectedGroup.length > 0) {
            setName(selectedGroup[1])
            getOneGroupModules(selectedGroup[0]).then(data => {
                setModulesId(data.map((item) => item.modules_id))
            })
        }
    }, [selectedGroup]);

    const modules = useMemo(() => {
        return groups.modules
    }, [groups.modules]);

    const handleToggleModule = (id) => {
        setModulesId(moduleId =>
            moduleId.includes(id) ? moduleId.filter(item => item !== id) : [...moduleId, id]
        );
    };

    function addNewGroup() {
        createGroup(user.user.id, name).then(dataGroup => {
            groups.addGroup(dataGroup)
            modulesId.forEach((moduleId) => {
                createGroupModule(moduleId, dataGroup.id).then(dataGroupModule => {
                    groups.addModuleInGroup(dataGroupModule)
                })
                setModulesId([])
                setName('')
            })
        })
    }

    const removeGroup = (groupId) => {
        try {
            deleteGroup(groupId).then(data => {
                groups.removeGroup(groupId)
                groups.removeModuleFromGroup(groupId)
                setModalActive(false)
            })
        } catch (e) {
            console.log(e)
        }
    }

    const saveGroup = () => {
        if(selectedGroup.length > 0) {
            changeGroup(selectedGroup[0], name, modulesId)
        } else {
            addNewGroup()
        }
        setModalActive(false)
    }

    const changeGroup = (groupId, newName, newModulesId) => {
        updateGroup(groupId, newName).then(() => {
            groups.updateNameGroup(groupId, newName)
        });

        deleteGroupModule(groupId).then((data) => {
            groups.removeModuleFromGroup(groupId)
        })

        newModulesId.forEach((moduleId) => {
            createGroupModule(moduleId, groupId).then(dataGroupModule => {
                groups.addModuleInGroup(dataGroupModule)
            })
            setModulesId([])
            setName('')
            setModalActive(false)
        })
    }

    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <div className={styles.modal}>
                <h2 className={styles.title}>{selectedGroup.length > 0 ? 'Редактирование группы' : 'Создание группы'}</h2>
                <div className={styles.inputContainer}>
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='login'
                        placeholder='Название группы'>
                    </Input>
                </div>
                <div className={[styles.inputContainer, styles.big].join(' ')}>
                    <h1 className={styles.text}>Выбрать модули</h1>
                    <div className={styles.scrollContainer}>
                        {
                            modules.map(module => (
                                <CheckModule
                                    module={module}
                                    onChange={handleToggleModule}
                                    key={module.id}
                                    active={modulesId.includes(module.id) }
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.buttonWrapper}>

                    { selectedGroup.length > 0 &&
                        <div className={styles.buttonContainer}>
                            <Button
                                icon={iconPlus}
                                className={'purple'}
                                onClick={ () => removeGroup(selectedGroup[0])}
                            >
                                Удалить
                            </Button>
                        </div>
                    }
                    <div className={styles.buttonContainer}>
                        <Button
                            icon={iconPlus}
                            className={'purple'}
                            onClick={() => saveGroup()}
                        >
                            {selectedGroup.length > 0 ? 'Редактировать' : 'Создать' }
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default GroupManager;