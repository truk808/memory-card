import React from 'react';
import styles from './moduleList.module.css';
import ModuleItem from "../moduleItem/ModuleItem";
import {ABOUT_ROUTE, MODULE_ROUTE} from "../../utils/consts";

const ModuleList = ({modules, groups}) => {
    function redirectToModule(id) {
        window.location.assign([MODULE_ROUTE, id].join('/'));
    }

    // console.log(modules)

    return (
        <div>
            {modules.map((module) =>
                <ModuleItem
                    onClick={() => redirectToModule(module.id) }
                    key={module.id}
                    module={module}/>
            )}
        </div>
    );
};

export default ModuleList;