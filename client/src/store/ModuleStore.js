import {makeAutoObservable} from "mobx";
import {updateModule} from "../http/moduleAPI";

export default class ModuleStore {
    constructor() {
        this._module = {}; // {name: "123123", descriptions: "2222222222`"}
        this._cards = [];
        makeAutoObservable(this);
    }

    setModule(module) {
        this._module = module;
    }

    setCards(cards) {
        this._cards = cards;
    }

    setCard(id, newCard) {
        this._cards = this._cards.map(card => card.id === id ? {...card, ...newCard} : card);
    }

    async updateIcon(icon) {
        console.log(icon)
        this._module.icon = icon;
        await updateModule(this._module, this._module.id);
    }

    async updateName(name) {
        this._module.name = name;
        await updateModule(this._module, this._module.id);
    }

    async updateDescription(description) {
        this._module.description = description;
        await updateModule(this._module, this._module.id);
    }

    sortCardBuId() {
        this._cards.sort((a, b) => a.id - b.id);
    }

    deleteCard(id) {
        this._cards = this._cards.filter(card => card.id !== id);
    }

    updateSideOne(cardId, sideOne) {
        this._cards.filter((card) => card.id === cardId)[0].side_one = sideOne;
        console.log(this._cards.filter((card) => card.id === cardId)[0].side_one)
    }

    updateSideTwo(cardId, sideTwo) {
        this._cards.filter((card) => card.id === cardId)[0].side_two = sideTwo;
    }

    get module() {
        return this._module
    }

    get cards() {
        return this._cards
    }

}
