import {instance} from './api';
import {RecoveryPassObjType} from '../m1-ui/components/recoveryPassword/RecoveryPasswordContainer';
import {setNewPassDatatype} from '../m1-ui/components/setNewPassword/SetNewPasswordContainer';



export const cardPackAPI = {

    pack(page:number = 1,pageCount:number = 10) {
        return instance.get<ResponseCardPackRequestType>(`cards/pack&page=${page}&count=${pageCount}&user_id=5eb543f6bea3ad21480f1ee7`)
            .then(res => res.data)
    },

}

export type CardPackType = {
    _id:string
    user_id:string
    name:string
    path:string
    cardsCount:number
    grade:number
    shots:number
    rating:number
    created:string
    updated:string
    __v:string
}

export type ResponseCardPackRequestType={
    cardPacksTotalCount:string
    maxCardsCount:number
    minCardsCount:number
    page:number
    pageCount:number
    cardPacks: Array<CardPackType>
}



