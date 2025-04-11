import {$authHost} from "./index";

export const getIcon = async () => {
    const {data} = await $authHost.get('api/icon');
    return data;
}