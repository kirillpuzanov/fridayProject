import {instance} from '../../../../main/m3-dal/api';
import {ResponseCardPackRequestType} from '../packs2-bll/cardPackTypes';


export const PackAPI = {

    getCardPacks: async () => {
        const response = await instance.get<ResponseCardPackRequestType>(`cards/pack?`
            + `&page=1`+`&count=4`+`&user_id=5eb543f6bea3ad21480f1ee7`)
        return response.data;

        },

};


