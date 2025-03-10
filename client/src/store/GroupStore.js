import { makeAutoObservable } from "mobx";

export default class GroupStore {
    constructor() {
        this._groups = [
            {id: 1, name: "Group 1"},
            {id: 2, name: "Group 2"},
            {id: 3, name: "Group 3"},
        ];
        this._modules = [
            {id: 1, name: "module 1", description: 'lorem'},
            {id: 2, name: "module 2", description: 'lorem'},
            {id: 3, name: "module 3", description: 'lorem'},
            {id: 4, name: "module 4", description: 'lorem'},
            {id: 5, name: "module 5", description: 'lorem'},
            {id: 6, name: "module 6", description: 'lorem'},
            {id: 7, name: "module 7", description: 'lorem'},
            {id: 8, name: "module 8", description: 'lorem'},
            {id: 9, name: "module 9", description: 'lorem'},
            {id: 10, name: "module 10", description: 'lorem'},

        ];
        this._groupsSelected = [

        ]
        this._group_modules = [
            {id: 1, groups_id: 1, modules_id: 1},
            {id: 2, groups_id: 1, modules_id: 2},
            {id: 4, groups_id: 1, modules_id: 4},
            {id: 5, groups_id: 1, modules_id: 5},
            {id: 6, groups_id: 1, modules_id: 6},
            {id: 7, groups_id: 1, modules_id: 7},
            {id: 8, groups_id: 2, modules_id: 1},
            {id: 3, groups_id: 2, modules_id: 3},

        ];

        makeAutoObservable(this);
    }

    setModules(modules) {
        this._modules = modules;
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
