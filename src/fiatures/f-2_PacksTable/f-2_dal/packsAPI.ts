import {instance} from '../../../main/m3-dal/api';
import {CardPackType} from '../f-2_bll/cardPacks-reducer';


export const packsAPI = {
    getCardPacks: (
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
            // + (packUser_id && `user_id=${packUser_id}&`)
        )
            .then(res => res.data);
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

type ResponsePack = {
    cardPacks: CardPackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
    error:string
}
