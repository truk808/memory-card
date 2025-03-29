import { makeAutoObservable } from "mobx";

export default class GroupStore {
    constructor() {
        this._groups = [];
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

    removeModule(moduleId) {
        this._modules = this._modules.filter(module => module.id !== moduleId);
    }

    addGroup(group) {
        this._groups.push(group);
    }

    addModuleInGroup(groupModules) {
        this._group_modules.push(groupModules);
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
