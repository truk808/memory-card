import React, {useContext, useEffect} from 'react';
import Modal from "../UI/modal/Modal";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import styles from "./addModule.module.css"
import iconPlus from "../../img/icon/icon-plus.svg";
import {createModule} from "../../http/moduleAPI";
import {Context} from "../../index";

const AddModule = ({modalActive, setModalActive, group}) => {
    const {user} = useContext(Context);
    const[name, setName]= React.useState('');
    const[description, setDescription] = React.useState(' ');

    function addNewModule() {
        try {
            createModule(user.user.id, name, description).then(data => {
                group.addModule(data);
                setName('')
                setDescription('')
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Modal active={modalActive} setActive={setModalActive}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Создание модуля</h2>
                <div className={styles.iconWrapper}>
                    <img alt="" className={styles.icon}/>
                    <p className={styles.textIcon}>Выбрать иконку</p>
                </div>
                <div className={styles.inputContainer}>
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='login'
                        placeholder='Название модуля'>
                    </Input>
                </div>
                <div className={[styles.inputContainer, styles.big].join(' ')}>
                    <Input
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className='login'
                        placeholder='Описание модуля'></Input>
                </div>
                <div className={styles.buttonWrapper}>
                    <div className={styles.buttonContainer}>
                        <Button
                            icon={iconPlus}
                            className={'blue'}
                            onClick={() => {addNewModule()}}
                        >
                            Создать модуль
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AddModule;