import {$authHost, $host} from "./index";

export const getModules = async (userId) => {
    const {data} = await $authHost.get('api/module/', {params: {userId}});
    // console.log(data)
    return data;
}

export const getOneModule = async (moduleId) => {
    const {data} = await $authHost.get('api/module/:id', {params: {moduleId}});
    return data;
}