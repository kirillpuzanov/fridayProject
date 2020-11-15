import axios from 'axios';


const instance = axios.create({
        baseURL: 'https://'
})

export const profileAPI = {
    getProfili(){
        return instance.get<any>(`myURL`)

    },
}

export const authAPI = {


}