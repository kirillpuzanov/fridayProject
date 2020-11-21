import {instance} from '../../../../main/m3-dal/api';
import {ResponseCardPackRequestType} from '../p2-bll/cardPackTypes';


export const PackAPI = {

    getCardPacks: async () => {
        const response = await instance.get<ResponseCardPackRequestType>(`cards/pack?`
            + `&page=1`+`&count=4`)
        return response.data;

        },

};


