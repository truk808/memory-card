import {$authHost} from "./index";

export const getGroupModule = async (userId) => {
    const {data} = await $authHost.get('api/group-module', {params: {userId}});
    return data;
}

export const getOneGroupModules = async (groupId) => {
    const {data} = await $authHost.get(`/api/group-module/:id`, {params: {groupId}});
    return data;
}

export const createGroupModule = async (moduleId, groupId) => {
    const {data} = await $authHost.post('api/group-module', {moduleId, groupId});
    return data;
}

export const deleteGroupModule = async (groupId) => {
    const { data } = await $authHost.delete(`api/group-module/:id`, {data: { groupId }});
    return data;
};