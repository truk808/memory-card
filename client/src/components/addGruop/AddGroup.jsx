import React, {useEffect} from 'react';
import Modal from "../UI/modal/Modal";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import styles from "./addGroup.module.css"
import iconPlus from "../../img/icon/icon-plus.svg";
import CheckModule from "../checkModule/CheckModule";

const AddModule = ({modalActive, setModalActive, group}) => {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    // const [addModuleInGroup,]

    function addNewGroup() {
        const newGroup = {
            id: Date.now(),
            name: name,
        }
        group.addGroup(newGroup);
        console.log(group.groups);
    }

    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Создание группы</h2>
                <div className={styles.inputContainer}>
                    <Input value={name} onChange={e => setName(e.target.value)} className='login'
                           placeholder='Название группы'></Input>
                </div>
                <div className={[styles.inputContainer, styles.big].join(' ')}>
                    <h1 className={styles.text}>Выбрать модули</h1>
                    <div className={styles.scrollContainer}>
                        {
                            group.modules.map(module => (
                                <CheckModule module={module}/>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <div className={styles.buttonContainer}>
                        <Button icon={iconPlus} className={'purple'} onClick={() => {
                            addNewGroup()
                        }}>Создать группу</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AddModule;