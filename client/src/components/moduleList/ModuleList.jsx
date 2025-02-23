import React from 'react';
import ModuleItem from "../moduleItem/ModuleItem";

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