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

export type CardsStateType = {
    cards: CardType[];
}

export const CardsInitState: CardsStateType = {
    cards: [],
};
