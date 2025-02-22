import {makeAutoObservable} from "mobx";

export default class ModuleStore {
    constructor() {
        this._module = {id: 1, name: "der Leute"}
        this._cards = [
            {id: 1, sideOne: "der Mann", sideTwo: "Мужчина"},
            {id: 2, sideOne: "der Mann", sideTwo: "Мужчина"},
            {id: 5, sideOne: "der Mann", sideTwo: "Мужчина"},
            {id: 6, sideOne: "der Mann", sideTwo: "Мужчина"},
            {id: 8, sideOne: "der Mann", sideTwo: "Мужчина"},
        ]
        makeAutoObservable(this)
    }

    updateCard(id, side, value) {
        const card = this._cards.find(card => card.id === id);
        if (card) {
            card[side] = value;
        }
    }
    updateModule(value) {
        this._module = {id: 1, name: value}
    }


    get module() {
        return this._module
    }
    get cards () {
        return this._cards
    }
}