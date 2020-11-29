import {BaseThunkType, InferActionsTypes} from '../../../../main/m2-bll/store';
import {CardsInitState, CardsStateType, CardType} from './CardTypes';
import {CardsAPI} from '../c1-dal/CardsAPI';


export const cardsReducer = (state = CardsInitState, action: CardsActionsType): CardsStateType => {
    switch (action.type) {
        case 'cards/SET_CARDS': {
            return {
                ...state,
                cards: action.cards,
            };
        }
        default: {
            return state;
        }
    }
};
export const CardsActions = {
    setLoading: (loading: boolean) => ({
        type: 'cards/SET_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'cards/SET_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'cards/SET_ERROR',
        error,
    } as const),

    setCards: (cards: CardType[]) => ({
        type: 'cards/SET_CARDS',
        cards,
    } as const),

};

export const updateCardTC = (id: string, pack_id: string): ThunkType => async (
    dispatch) => {

    try {
        await CardsAPI.updateCard(id);
        dispatch(getCardsTC(pack_id));
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
        console.log(error);
        return error;
    }

};

export const getCardsTC = (id: string): ThunkType => async (
    dispatch
) => {
    try {
        const data = await CardsAPI.getCards(id);
        dispatch(CardsActions.setCards(data.cards));
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
        console.log(error);
        return error;
    }
};

export const deleteCardTC = (id: string, pack_id: string): ThunkType => async (dispatch) => {
    try {
        await CardsAPI.deleteCard(id);
        dispatch(getCardsTC(pack_id));
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
        console.log(error);
        return error;
    }

};
export const addCardTC = (id: string): ThunkType => async (
    dispatch) => {
    try {
        await CardsAPI.addCard(id);
        dispatch(getCardsTC(id));
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
        console.log(error);
        return error;
    }
};
export type CardsActionsType = InferActionsTypes<typeof CardsActions>;
type ThunkType = BaseThunkType<CardsActionsType>;

