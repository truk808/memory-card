import { makeAutoObservable } from "mobx";

export default class GroupStore {
    constructor() {
        this._groups = [
            {id: 1, name: "Group 1"},
            {id: 2, name: "Group 2"},
            {id: 3, name: "Group 3"},
        ];
        this._modules = [
            {id: 1, name: "module 1"},
            {id: 2, name: "module 2"},
            {id: 3, name: "module 3"},
            {id: 4, name: "module 4"},
            {id: 5, name: "module 5"},
        ];
        this._groupsSelected = [

        ]
        this._group_modules = [
            {id: 1, groups_id: 1, modules_id: 1},
            {id: 2, groups_id: 1, modules_id: 2},
            {id: 3, groups_id: 2, modules_id: 3},
        ];

        makeAutoObservable(this);
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

    setGroupsSelected(id) {
        if (this._groupsSelected.indexOf(id) === -1) {
            this.addGroupSelected(id)
        } else {
            this.removeGroupSelected(id);
        }
    }

    addGroupSelected(id) {
        this.groupsSelected.push(id)
    }

    removeGroupSelected(id) {
        this._groupsSelected = this.groupsSelected.filter(group => group !== id);
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


}
