import {instance} from './api';


export const authAPI = {
    register(email: string, password: string) {
        return instance.post<ResponseReg>('auth/register', {email, password})
            .then(res => res.data)
    },
    login(data: LoginParamsType) {
        return instance.post<ProfileType>('auth/login', data)
    },
    getCookie(name: string) {
        // проверка на наличие в куках браузера, куки с именем token для конкретного домена
        let matches = document.cookie.match(new RegExp(
            '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
        ));
        return !!matches
    },
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}
type ResponseReg = {
    addedUser: ProfileType
    error: string
}

export type ProfileType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error: string
    token: string
}
