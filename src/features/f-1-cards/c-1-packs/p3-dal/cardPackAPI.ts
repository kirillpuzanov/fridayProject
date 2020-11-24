import {instance} from '../../../../main/m3-dal/api';
import {ResponsePack} from '../../../../fiatures/f-2_PacksTable/f-2_dal/packsAPI';


export const PackAPI = {
    getCardPacks: (
        max?: number,
        min?: number,
        packName?: string,
        currentPage?: number,
        pageSize?: number,
        sortPacks?: string,
        user_id?: string,) => {
        return instance.get<ResponsePack>(
            'cards/pack?'
            + (packName ? `packName=${packName}&` : '')
            + (sortPacks ? `sortPacks=${sortPacks}&` : '')
            + (max ? `max=${max}&min=${min}&` : '')
            + (currentPage ? `page=${currentPage}&` : '')
            + (pageSize ? `pageCount=${pageSize}&` : '')
            // + (user_id ? `user_id=${user_id}&` : '')
        )
            .then(res => res.data);
    },


    // getCardPacks: async (userPack_id: string) => {
    //     const response = await instance.get<ResponseCardPackRequestType>(`cards/pack?`
    //         + `&page=1` + `&count=4` + (userPack_id && `&user_id=${userPack_id}`));
    //     return response.data;
    // },

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


