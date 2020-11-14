import axios from 'axios';


export const instance = axios.create({
    //локально:
        baseURL: 'http://localhost:7542/2.0/',
    // gh-pages:
        // baseURL: 'https://neko-back.herokuapp.com/2.0/'
    withCredentials: true,
})

