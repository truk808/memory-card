import {$authHost, $host} from "./index";

export const getGroups = async (userId) => {
    const {data} = await $authHost.get('api/groups', {params: {userId}});
    return data;
}

export const createGroup = async (userId, name) => {
    const {data} = await $authHost.post('api/groups', {userId, name});
    return data;
}