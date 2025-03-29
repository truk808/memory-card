import {$authHost, $host} from "./index";

export const getCardsFromModules = async (moduleId) => {
    const {data} = await $authHost.get('api/card/from-module/:id', {params: {moduleId}});
    return data;
}

export const createCard = async (moduleId) => {
    const {data} = await $authHost.post('api/card/', {moduleId});
    return data;
}

export const updateCard = async (newCard, cardId) => {
    const {data} = await $authHost.put(`api/card/${cardId}`, {newCard});
    return data;
}

export const deleteCard = async (cardId) => {
    const {data} = await $authHost.delete(`api/card/${cardId}`);
    return data;
}
