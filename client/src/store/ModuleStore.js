import { makeAutoObservable } from "mobx";

export default class ModuleStore {
    constructor() {
        this._module = { id: 1, name: "der Leute" };
        this._cards = [
            { id: 1, sideOne: "der Mann", sideTwo: "Мужчина" },
            { id: 2, sideOne: "die Frau", sideTwo: "Женщина" },
            { id: 3, sideOne: "das Kind", sideTwo: "Ребенок" },
        ];
        this._learnedCard = [];
        this._notLearnedCard = [];
        this._activeCard = this._cards.length > 0 ? this._cards[0] : null;
        makeAutoObservable(this);
    }

    setModule(module) {
        this._module = module;
    }

    setCards(cards) {
        this._cards = cards;
    }

    setActiveCard(card) {
        this._activeCard = card;
    }

    updateCard(id, side, value) {
        const card = this._cards.find(card => card.id === id);
        if (card) {
            card[side] = value;
        }
    }

    updateModule(value) {
        this._module.name = value
    }

    get activeCard() {
        return this._activeCard;
    }

    get module() {
        return this._module
    }

    get cards () {
        return this._cards
    }
}
