import {BaseThunkType, InferActionsTypes} from './store';
import {cardPackAPI, CardPackType} from '../m3-dal/cardDeckAPI';



const initialState = {
    cardPack: {} as CardPackType,
    // cardPack: [{
    //     _id:'',
    //     user_ud:'',
    //     name:'',
    //     path:'',
    //     cardsCount:25,
    //     grade:0,
    //     shots:0,
    //     rating:0,
    //     created:'',
    //     updated:'',
    //     __v:'',
    //  }],
    cardPacksTotalCount: 14,
    maxCardsCount:4,
    mincardsCount:0,
    page:1,
    pageCount:4



}



export const cardDeckReducer = (state: CardPackInitialStateType = initialState, action: CardPackActionsType): CardPackInitialStateType => {
    switch (action.type) {
        case '/CARD-DECK/SET-DECKS':
            return {...state, cardPack: action.cardPack};
        default:
            return state;
    }
};


//actions
export const cardPackActions = {
    setCardDeckAC: (cardPack: CardPackType) => ({type: '/CARD-DECK/SET-DECKS', cardPack} as const),
};


export const CardPackTC = (): ThunkType =>
    async (dispatch) => {
        try {
            const response = await cardPackAPI.pack()
            dispatch(cardPackActions.setCardDeckAC(response.cardPacks));

        } catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ',more details on the console');
            console.log(error);
            return error;
        }
    };



export type CardPackInitialStateType = typeof initialState;

type ThunkType = BaseThunkType<CardPackActionsType>;
export type CardPackActionsType = InferActionsTypes<typeof cardPackActions>


