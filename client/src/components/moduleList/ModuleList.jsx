import React from 'react';
import styles from './moduleList.module.css';
import ModuleItem from "../moduleItem/ModuleItem";
import {ABOUT_ROUTE, MODULE_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";

const ModuleList = ({modules, groups}) => {

    return (
        <div>
            {modules.map((module) =>
                <ModuleItem
                    key={module.id}
                    module={module}/>
            )}
        </div>
    );
};

export default ModuleList;