import {$authHost, $host} from "./index";

export const registration = async (email, password) => {
    const responce = await $host.post('api/user/registration', {email, password, subscription: "USER"});
    return responce;
}

export const login = async (email, password) => {
    const responce = await $host.post('api/user/login', {email, password});
    return responce;
}

export const check = async () => {
    const responce = await $host.post('api/user/check');
    return responce;
}