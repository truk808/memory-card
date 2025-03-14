import React, {useMemo} from 'react';
import ModuleList from "../moduleList/ModuleList";
import GroupList from "../groupList/GroupList";

const FilterModules = ({searchText, group}) => {
    const modules = group.getUngroupedModules()

    const searchModules = useMemo(() => {
        return group.modules.filter(module => module.name.toLowerCase().includes(searchText.toLowerCase()));
    }, [searchText]);

    return (
        <>
            {
                searchText ?
                    <ModuleList modules={searchModules} groups={group}/>
                    :
                    <>
                        <GroupList groups={group}/>
                        <ModuleList modules={modules} groups={group}/>
                    </>
            }
        </>
    );
};

export default FilterModules;