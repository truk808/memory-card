import {$authHost, $host} from "./index";

export const getModules = async (userId) => {
    const {data} = await $authHost.get('api/module/', {params: {userId}});
    return data;
}

export const getOneModule = async (moduleId) => {
    const {data} = await $authHost.get('api/module/:id', {params: {moduleId}});
    return data;
}

export const createModule = async (userId, name, description, icon) => {
    const {data} = await $authHost.post('api/module/', {userId, name, description, icon});
    return data;
}

export const updateModule = async (newModule, moduleId) => {
    const {data} = await $authHost.put(`api/module/${moduleId}`, {newModule});
    return data;
}

export const deleteModule = async (moduleId) => {
    const {data} = await $authHost.delete(`api/module/${moduleId}`);
    return data;
}