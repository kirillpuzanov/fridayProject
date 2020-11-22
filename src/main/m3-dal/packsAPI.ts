import {instance} from './api';
import {PackType} from '../m2-bll/packs-reducer';


export const packsAPI = {
    getPacks: (
        max: number,
        min: number,
        packName?: string,
        currentPage?: number,
        pageSize?: number,
        sortPacks?: string,
        packUser_id?: string,) => {
        return instance.get<ResponsePack>(
            'cards/pack?'
            + (packName ? `packName=${packName}&` : '')
            + (sortPacks ? `sortPacks=${sortPacks}&` : '')
            + (max ? `max=${max}&min=${min}&` : '')
            + (currentPage ? `page=${currentPage}&` : '')
            + (pageSize ? `pageCount=${pageSize}&` : '')
            + (packUser_id ? `user_id=${packUser_id}&` : '')
        )
            .then(res => res.data)
    },
}

type ResponsePack = {
    cardPacks: PackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
    error:string
}
