import {instance} from '../../../../main/m3-dal/api';
import {CardType} from '../c1-bll/CardTypes';


export type GetDataType = {
    cards: CardType[];
    error: string;
}

export const CardsAPI = {
    getCards: async (cardsPack_id: string) => {
        const response = await instance.get<GetDataType>(`/cards/card?cardsPack_id=${cardsPack_id}`
            + '&pageCount=1000'
            // + "&cardQuestion=ne"
            // + "&min=2"
            // + "&max=3"
        );

        return response.data;
    },
    addCard: async (cardsPack_id: string) => {
        const response = await instance.post<any>('/cards/card', {
            card: {
                cardsPack_id,
                question: 'new 2.0!',
                grade: Math.random() * 5,
                questionImg: 'some img',
            },
        });

        return response.data;
    },
    updateCard: async (id: string) => {
        const response = await instance.put<any>('/cards/card', {
            card: {
                _id: id,
                question: 'updated question',
                answerImg: 'some answer img',
                comments: 'new com',
            }
        });

        return response.data;
    },
    deleteCard: async (id: string) => {
        const response = await instance.delete<any>(`/cards/card?&id=${id}`);
        return response.data;
    },

};
