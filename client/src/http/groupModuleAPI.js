import {$authHost, $host} from "./index";

export const getGroupModule = async (userId) => {
    const {data} = await $authHost.get('api/group-module', {params: {userId}});
    console.log(data)
    return data;
}