import {instance} from '../../../../main/m3-dal/api';
import {PackType} from '../f-2_bll/packs-reducer';


export const packsAPI = {

    getCardPacks: async (
        max: number,
        min: number,
        packName?: string,
        currentPage?: number,
        pageSize?: number,
        sortPacks?: string,
        user_id?: string,) => {
        const res = await instance.get<ResponsePack>(
            'cards/pack?'
            + (packName ? `packName=${packName}&` : '')
            + (sortPacks ? `sortPacks=${sortPacks}&` : '')
            + (max ? `max=${max}&min=${min}&` : '')
            + (currentPage ? `page=${currentPage}&` : '')
            + (pageSize ? `pageCount=${pageSize}&` : '')
            + (user_id && `user_id=${user_id}&`)
        );
        return res.data;
    },
    addPack: async () => {
        const response = await instance.post<any>('/cards/pack', {
            cardsPack: {
                name: 'NewPack',
            }
        });
        return response.data;
    },
    updatePack: async (packId: string) => {
        const response = await instance.put<any>('/cards/pack', {
            cardsPack: {
                _id: packId,
                name: 'Pack updated',
                deckCover: ''
            }
        });
        return response.data;
    },
    deletePack: async (packId: string) => {
        const response = await instance.delete<any>(`/cards/pack?id=${packId}`);
        return response.data;
    },

};

export type ResponsePack = {
    cardPacks: PackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
    error: string
}
