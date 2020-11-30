export type CardType = {
    _id: string;
    cardsPack_id: string;
    user_id: string;

    answer: string;
    question: string;
    grade: number;
    shots: number;

    questionImg: string;
    answerImg: string;
    answerVideo: string;
    questionVideo: string;

    comments: string;

    type: string;
    rating: number;
    more_id: string;

    created: string;
    updated: string;
}

export type CardsStateType = typeof CardsInitState;

export const CardsInitState = {
    cards: [] as CardType[],
    cardsTotalCount: 0,

    cardQuestion:'',
    maxGrade: 5,
    minGrade: 0,
    currentPage: 1,
    pageSize: 5,
    packUserId: '',
    sortCards: '0grade',

    tableLoading: false,
    tableSuccess: false,
};
