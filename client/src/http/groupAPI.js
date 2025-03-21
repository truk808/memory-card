import {$authHost, $host} from "./index";

export const getGroups = async (userId) => {
    const {data} = await $authHost.get('api/groups', {params: {userId}});
    console.log(data)
    return data;
}