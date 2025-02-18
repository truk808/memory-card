import {makeAutoObservable} from "mobx";

export default class ModuleStore {
    constructor () {
        this._group = [
            {id: 1, name: 'Неменцкий'},
            {id: 2, name: 'Французкий'},
        ]
        this._modules = [
            {id: 1, name: "der Leute"},
            {id: 2, name: "dia Famille"},
        ]
        this._cards = [
            {id: 1, sideOne: "der Mann", sideTwo: "Мужчина"},
            {id: 2, sideOne: "der Mann", sideTwo: "Мужчина"},
            {id: 3, sideOne: "der Mann", sideTwo: "Мужчина"},
            {id: 4, sideOne: "der Mann", sideTwo: "Мужчина"},
            {id: 5, sideOne: "der Mann", sideTwo: "Мужчина"},
        ]
        makeAutoObservable(this)
    }

    setGroup(group) {
        this._group = group
    }
    setModules(modules) {
        this._modules = modules
    }
    setUser(cards) {
        this._cards = cards
    }

    get group () {
        return this._group
    }
    get modules() {
        return this._modules
    }
    get cards () {
        return this._cards
    }
}