import {instance} from '../../../../main/m3-dal/api';
import {ResponseCardPackRequestType} from '../p2-bll/cardPackTypes';


export const PackAPI = {

    getCardPacks: async (userPack_id: string) => {
        const response = await instance.get<ResponseCardPackRequestType>(`cards/pack?`
            + `&page=1` + `&count=4` + (userPack_id && `&user_id=${userPack_id}`));
        return response.data;
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


