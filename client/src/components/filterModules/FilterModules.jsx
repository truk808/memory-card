import React, {useMemo} from 'react';
import ModuleList from "../moduleList/ModuleList";
import GroupList from "../groupList/GroupList";
import {observer} from "mobx-react-lite";

const FilterModules = observer(({searchText, group}) => {
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
                        <hr className="separation"/>
                        <ModuleList modules={modules} groups={group}/>
                    </>
            }
        </>
    );
});

export default FilterModules;