import {AppStateType, BaseThunkType, InferActionsTypes} from '../../../../main/m2-bll/store';
import {PackAPI} from '../p3-dal/cardPackAPI';
import {CardPackType, PacksTypeF} from './cardPackTypes';

const initialState: PacksTypeF = {
    cardPacks: [],
    user_id: ''
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
        case '/CARD_PACK/SET_PACKS':
            return {...state, cardPacks: action.cardPacks};
        case '/CARD_PACK/SET_PACK_USER_ID':
            return {
                ...state,
                user_id: action.user_id,
            };
        default:
            return state;
    }
};


export const cardPackActions = {
    setCardDeckAC: (cardPacks: Array<CardPackType>) => ({type: '/CARD_PACK/SET_PACKS', cardPacks} as const),
    setUserPack_id: (user_id: string) => ({type: '/CARD_PACK/SET_PACK_USER_ID', user_id} as const)

};

export const CardPackTC = (): ThunkType =>
    async (dispatch
        , getState: GetAppStoreType) => {
        try {
            const {user_id} = getState().cardPack;
            // const data = await PackAPI.getCardPacks(userPack_id);
            // const data = await packsAPI.getCardPacks(packUser_id)
            // dispatch(cardPackActions.setCardDeckAC(data.cardPacks));
        } catch (e) {
            const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
            console.log(error);
            return error;
        }
    };

//TODO объеденить редьюсеры
export const addPack = (): ThunkType => async (dispatch
) => {
    try {
        const data = await PackAPI.addPack();
        dispatch(CardPackTC());
        console.log(data);
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
        console.log(error);
        return error;
    }

};
export const deletePack = (packId: string): ThunkType => async (dispatch
) => {
    try {
        const data = await PackAPI.deletePack(packId);
        dispatch(CardPackTC());
        console.log(data);
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
        console.log(error);
        return error;
    }

};
export const updatePack = (packId: string): ThunkType => async (dispatch
) => {
    try {
        const data = await PackAPI.updatePack(packId);
        dispatch(CardPackTC());
        console.log(data);
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
        console.log(error);
        return error;
    }

};


export type CardPackInitialStateType = typeof initialState;
type ThunkType = BaseThunkType<CardPackActionsType>;
export type CardPackActionsType = InferActionsTypes<typeof cardPackActions>
export type GetAppStoreType = () => AppStateType;

