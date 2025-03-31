import { makeAutoObservable } from "mobx";
import group from "../page/Group";

export default class GroupStore {
    constructor() {
        this._groups = []; // [{name: 'asasa', title:'qweqweqe', data:'12.12.1222'}, {name: 'asasa', title:'qweqweqe', data:'12.12.1222'}]
        this._modules = [];
        this._groupsSelected = []
        this._group_modules = [];

        makeAutoObservable(this);
    }

    setGroups(groups) {
        this._groups = groups;
    }

    setModules(modules) {
        this._modules = modules;
    }

    setGroupModules(groupModule) {
        this._group_modules = groupModule;
    }

    setGroupsSelected(id) {
        if (this._groupsSelected.indexOf(id) === -1) {
            this.addGroupSelected(id)
        } else {
            this.removeGroupSelected(id);
        }
    }

    updateNameGroup(groupId, newName) {
        this._groups.forEach((group) => {
            if (group.id === groupId) {
                group.name = newName;
            }
        })
    }

    // вернет модули из группы[groupId]
    getModulesByGroup(groupId) {
        return this._group_modules
            .filter(groupModule => groupModule.groups_id === groupId)
            .map(groupModule => this._modules.find(module => module.id === groupModule.modules_id));
    }
    // вернет модули БЕЗ групп
    getUngroupedModules() {
        const groupedModuleIds = this._group_modules.map(groupModule => groupModule.modules_id);
        return this._modules.filter(module => !groupedModuleIds.includes(module.id));
    }

    addGroupSelected(id) {
        this.groupsSelected.push(id)
    }

    removeGroupSelected(id) {
        this._groupsSelected = this.groupsSelected.filter(group => group !== id);
    }

    addModule(module) {
        this._modules.push(module);
    }

    addModuleInGroup(groupModule) {
        const newGroupModule = {
            id: groupModule.id,
            groups_id : groupModule.groupId,
            modules_id : groupModule.moduleId,
        }
        this._group_modules = [...this._group_modules, newGroupModule];
    }

    removeModule(moduleId) {
        this._modules = this._modules.filter(module => module.id !== moduleId);
    }

    removeGroup(groupId) {
        this._groups = this._groups.filter(group => group.id !== groupId);
    }

    removeModuleFromGroup(groupId) {
       this._group_modules = this._group_modules.filter(groupModule => groupModule.groups_id !== groupId);
    }

    addGroup(group) {
        this._groups.push(group);
    }

    get groups() {
        return this._groups;
    }

    get modules() {
        return this._modules;
    }

    get groupsSelected() {
        return this._groupsSelected;
    }

    get groupInModules() {
        return this._group_modules;
    }


}
