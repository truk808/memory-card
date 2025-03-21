import {$authHost, $host} from "./index";

export const getCardsFromModules = async (moduleId) => {
    const {data} = await $authHost.get('api/card/from-module/:id', {params: {moduleId}});
    console.log(data)
    return data;
}