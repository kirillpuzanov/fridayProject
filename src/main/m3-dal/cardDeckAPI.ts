import {instance} from './api';
import {RecoveryPassObjType} from '../m1-ui/components/recoveryPassword/RecoveryPasswordContainer';
import {setNewPassDatatype} from '../m1-ui/components/setNewPassword/SetNewPasswordContainer';



export const cardPackAPI = {

    pack() {
        return instance.get<ResponseCardPackRequestType>('cards/pack')
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
    cardPacks: CardPackType
}



