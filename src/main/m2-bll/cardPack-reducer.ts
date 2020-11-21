import {BaseThunkType, InferActionsTypes} from './store';
import {cardPackAPI, CardPackType} from '../m3-dal/cardPackAPI';


const initialState = {

    cardPack: [{
        _id: '',
        user_id: '',
        name: '',
        path: '',
        cardsCount: 25,
        grade: 0,
        shots: 0,
        rating: 0,
        created: '',
        updated: '',
        __v: '',
    }],
    cardPacksTotalCount: 14,
    maxCardsCount: 4,
    mincardsCount: 0,
    page: 1,
    pageCount: 4


};


export const cardPackReducer = (state: CardPackInitialStateType = initialState, action: CardPackActionsType): CardPackInitialStateType => {
    switch (action.type) {
        case '/CARD-PACK/SET-PACKS':
            return {...state, cardPack: action.cardPack};
        case '/CARD-PACK/SET-PAGE':
            return {...state, page: action.page};
        case '/CARD-PACK/SET-PAGE-COUNT':
            return {...state, pageCount: action.pageCount};

        default:
            return state;
    }
};


//actions
export const cardPackActions = {
    setCardDeckAC: (cardPack: Array<CardPackType>) => ({type: '/CARD-PACK/SET-PACKS', cardPack} as const),
    setPage: (page: number) => ({type: '/CARD-PACK/SET-PAGE', page} as const),
    setPageCount: (pageCount: number) => ({type: '/CARD-PACK/SET-PAGE-COUNT', pageCount} as const),
};

export const CardPackTC = (page: number, pageCount: number): ThunkType =>
    async (dispatch) => {
        dispatch(cardPackActions.setPage(page))

        try {
            const response = await cardPackAPI.pack(page,pageCount);
            dispatch(cardPackActions.setCardDeckAC(response.cardPacks));
            dispatch(cardPackActions.setPageCount(response.pageCount)) //TODO получаем с сервера или диспачим свое

        } catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
            console.log(error);
            return error;
        }
    };


export type CardPackInitialStateType = typeof initialState;

type ThunkType = BaseThunkType<CardPackActionsType>;
export type CardPackActionsType = InferActionsTypes<typeof cardPackActions>


