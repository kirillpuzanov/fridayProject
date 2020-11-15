import {instance} from './api';


export const authApi = {
    register(email: string, password: string) {
        return instance.post<ResponseReg>('auth/register', {email, password})
            .then(res => res.data)
    },

}

type newUserType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified: boolean
    __v: number
    _id: string
}
type ResponseReg = {
    addedUser: newUserType
    error: string
}