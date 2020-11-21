import {BaseThunkType, InferActionsTypes} from '../../../../main/m2-bll/store';
import {PackAPI} from '../p3-dal/cardPackAPI';
import {CardPackType, PacksType} from './cardPackTypes';

const initialState: PacksType = {
    cardPacks: []
};
// const initialState = {
//
//     cardPack: [{
//         _id: '',
//         user_id: '',
//         name: '',
//         path: '',
//         cardsCount: 25,
//         grade: 0,
//         shots: 0,
//         rating: 0,
//         created: '',
//         updated: '',
//         __v: 0,
//         type: 'pack'
//     }]
//
// };


export const cardPackReducer = (state: CardPackInitialStateType = initialState, action: CardPackActionsType): CardPackInitialStateType => {
    switch (action.type) {
        case '/CARD-PACK/SET-PACKS':
            return {...state, cardPacks: action.cardPacks};
        default:
            return state;
    }
};


export const cardPackActions = {
    setCardDeckAC: (cardPacks: Array<CardPackType>) => ({type: '/CARD-PACK/SET-PACKS', cardPacks} as const),
};

export const CardPackTC = (): ThunkType =>
    async (dispatch) => {
        try {
            const data = await PackAPI.getCardPacks();
            dispatch(cardPackActions.setCardDeckAC(data.cardPacks));
        } catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
            console.log(error);
            return error;
        }
    };


export type CardPackInitialStateType = typeof initialState;
type ThunkType = BaseThunkType<CardPackActionsType>;
export type CardPackActionsType = InferActionsTypes<typeof cardPackActions>


