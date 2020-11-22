export type PacksType = {
    cardPacks: CardPackType[];
    userPack_id: string
}

export type CardPackType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    created: string
    updated: string
    __v: number
    type: string
    deckCover: string;
}


export type ResponseCardPackRequestType = {
    cardPacksTotalCount: string
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    cardPacks: Array<CardPackType>
    error: string
}

