import {instance} from './api';


export const authAPI = {
    register(email: string, password: string) {
        return instance.post<ResponseReg>('auth/register', {email, password})
            .then(res => res.data)
    },
    login(data: LoginParamsType) {
        return instance.post<ProfileType>('auth/login', data)
    },
    authMe() {
        return instance.post<ProfileType>('auth/me')
            .then(r => r.data)
    },
    logout() {
        return instance.delete<LogoutResType>('auth/me')
            .then(r => r.data)
    }
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
type LogoutResType = {
    info: string
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