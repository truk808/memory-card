import {$authHost, $host} from "./index";

export const getGroups = async (userId) => {
    const {data} = await $authHost.get('api/groups', {params: {userId}});
    return data;
}

export const updateGroup = async (groupId, name) => {
    const { data } = await $authHost.put(`api/groups/${groupId}`, { name });
    return data;
};

export const createGroup = async (userId, name) => {
    const {data} = await $authHost.post('api/groups', {userId, name});
    return data;
}

export const deleteGroup = async (groupId) => {
    const {data} = await $authHost.delete(`api/groups/${groupId}`);
    return data;
}