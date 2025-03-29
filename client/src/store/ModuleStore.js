import {makeAutoObservable} from "mobx";

export default class ModuleStore {
    constructor() {
        this._module = {}; // {name: "123123", descriptions: "2222222222`"}
        this._cards = [];
        this._activeCard = null;
        this._learningCards = [];
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

    setLearningCard(cards) {
        this._learningCards = cards;
    }

    setCard(id, newCard) {
        this._cards = this._cards.map(card => card.id === id ? { ...card, ...newCard } : card);
    }

    nextCard() {
        const index = this._learningCards.indexOf(this.activeCard);

        if (index + 1 < this.learningCards.length) {
            this.setActiveCard(this.learningCards[index + 1]);
        } else {
            console.log("карт нет")
            this.setActiveCard(null);
        }
    }

    updateModule(value) {
        this._module.name = value
    }

    deleteCard(id) {
        this._cards = this._cards.filter(card => card.id !== id);
    }

    get activeCard() {
        return this._activeCard;
    }

    get module() {
        return this._module
    }

    get cards() {
        return this._cards
    }

    get learningCards() {
        return this._learningCards
    }
}
