import {$authHost, $host} from "./index";

export const getGroupModule = async (userId) => {
    const {data} = await $authHost.get('api/group-module', {params: {userId}});
    return data;
}

export const createGroupModule = async (moduleId, groupId) => {
    const {data} = await $authHost.post('api/group-module', {moduleId, groupId});
    return data;
}