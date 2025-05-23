import {makeAutoObservable} from "mobx";
import {Component} from "react";
import {login} from "../http/userAPI";

export default class CardStore {
    constructor() {
        this._cards = [];
        this._activeCard = null;
        this._trueAnswers = []
        this._falseAnswers = [];
        this._date = null;
        this._time = null;
        makeAutoObservable(this);
    }

    setCards(cards) {
        this._cards = cards;
    }

    setActiveCard(activeCard) {
        this._activeCard = activeCard;
    }

    setTrueAnswers(trueAnswers) {
        this._trueAnswers = trueAnswers;
    }

    setFalseAnswers(falseAnswers) {
        this._falseAnswers = falseAnswers;
    }

    setDate(date) {
        this._date = date;
    }

    setTime(time) {
        this._time = time;
    }

    addTrueAnswers(answer) {
        this._trueAnswers.push(answer);
    }

    addFalseAnswers(answer) {
        this._falseAnswers.push(answer);
    }

    removeTrueAnswers(answer) {
        this._trueAnswers = this._trueAnswers.filter(element => element.id !== answer.id);
    }

    removeFalseAnswers(answer) {
        this._falseAnswers = this._falseAnswers.filter(element => element.id !== answer.id);
    }

    nextCard() {
        const index = this._cards.indexOf(this.activeCard);

        if (index + 1 < this._cards.length) {
            this.setActiveCard(this._cards[index + 1]);
            // console.log(this.activeCard.side_one);
        } else {
            console.log("карт нет")
            this.setActiveCard(null);
        }
    }

    reset() {
        this._cards = [];
        this._activeCard = null;
        this._trueAnswers = []
        this._falseAnswers = [];
        this._date = null;
        this._time = null;

    }

    get cards() {
        return this._cards;
    }

    get activeCard() {
        return this._activeCard;
    }

    get trueAnswers() {
        return this._trueAnswers;
    }

    get falseAnswers() {
        return this._falseAnswers;
    }

    get date() {
        return this._date;
    }

    get time() {
        return this._time;
    }
};