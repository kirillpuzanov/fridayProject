import axios from 'axios';

export const instance = axios.create({
    //локально:
    baseURL: 'http://localhost:7542/2.0/',
    // gh-pages:
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})




export const profileAPI = {
    getProfili(){
        return instance.get<any>(`myURL`)

    },
}

export const authAPI = {
    login(data:LoginParamsType){
        return instance.post<ResponseType>('auth/login',data)}
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean

}
export type ResponseType = {
    _id:string
    email:string
    name:string
    avatar?:string
    publicCardPacksCount:number
    created:Date
    updated:Date
    isAdmin:boolean
    verified:boolean
    rememberMe:boolean
    error:string
    token:string

}