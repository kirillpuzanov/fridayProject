import {instance} from '../../../../main/m3-dal/api';
import {CardType} from '../c2-bll/CardTypes';


export const CardsAPI = {
    getCards: async (cardsPack_id: string,
                     cardQuestion?: string,
                     maxGrade?: number,
                     minGrade?: number,
                     sortCards?: string,
                     currentPage?: number,
                     pageSize?: number) => {
        const response = await instance.get<GetCardDataType>(`/cards/card?cardsPack_id=${cardsPack_id}&`
            + (cardQuestion ? `cardQuestion=${cardQuestion}&` : '')
            + (maxGrade ? `max=${maxGrade}&min=${minGrade}&` : '')
            + (sortCards ? `sortCards= ${sortCards}&` : '')
            + (currentPage ? `page=${currentPage}&` : '')
            + (pageSize ? `pageCount=${pageSize}&` : '')
        );
        return response.data;
    },
    addCard: async (cardsPack_id: string,cardQuestion:string) => {
        const response = await instance.post<any>('/cards/card', {
            card: {
                cardsPack_id,
                question: cardQuestion,
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
    gradeCard: async (grade: number, card_id: string) => {
        const response = await instance.put<ResponseGradeType>('cards/grade', {grade, card_id});
        return response.data;
    },
}


type ResponseGradeType = {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number
}
export type GetCardDataType = {
    cards: CardType[];
    error: string;
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}