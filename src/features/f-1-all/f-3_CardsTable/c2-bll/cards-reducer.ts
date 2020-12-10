import {BaseThunkType, InferActionsTypes} from '../../../../main/m2-bll/store';
import {CardsInitState, CardsStateType, CardType} from './CardTypes';
import {CardsAPI} from '../c3-dal/CardsAPI';
import {authActionsType} from '../../f-1_autorization/f-1_bll/auth-reducer';
import {appActions, AppActionsType} from '../../../../main/m2-bll/app-reducer';


export const cardsReducer = (state = CardsInitState, action: CardsActionsType): CardsStateType => {
    switch (action.type) {
        case '/CARDS/SET_CARDS':
            return {...state, cards: action.cards};
        case '/CARDS/CARDS-TOTAL-COUNT':
            return {...state, cardsTotalCount: action.totalCount};
        case  '/CARDS/SET_PACK_USER_ID':
            return {...state, packUserId: action.userPack_id,};

        case '/CARDS/SET-SORT-MAX':
            return {...state, maxGrade: action.sortMax};
        case '/CARDS/SET-SORT-MIN':
            return {...state, minGrade: action.sortMin};
        case '/CARDS/SET-CARD-NAME':
            return {...state, cardQuestion: action.searchName};
        case '/CARDS/SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage};
        case '/CARDS/SET-PAGE-SIZE':
            return {...state, currentPage: action.currentPage, pageSize: action.pageSize};
        case '/CARDS/SET-SORT-CARDS':
            return {...state, sortCards: action.sortCards};

        case '/CARDS/SET_LOADING':
            return {...state, tableLoading: action.loading};
        case '/CARDS/SET_SUCCESS':
            return {...state, tableSuccess: action.success};
        default:
            return state;
    }
};

export const CardsActions = {
    setCardsAC: (cards: Array<CardType>) => ({type: '/CARDS/SET_CARDS', cards} as const),
    setCardsTotalCount: (totalCount: number) => ({type: '/CARDS/CARDS-TOTAL-COUNT', totalCount} as const),
    setUserPack_id: (userPack_id: string) => ({type: '/CARDS/SET_PACK_USER_ID', userPack_id} as const),

    setMaxGradeAC: (sortMax: number) => ({type: '/CARDS/SET-SORT-MAX', sortMax} as const),
    setMinGradeAC: (sortMin: number) => ({type: '/CARDS/SET-SORT-MIN', sortMin} as const),
    setCardQuestionNameAC: (searchName: string) => ({type: '/CARDS/SET-CARD-NAME', searchName} as const),
    setCurrentPageCardsAC: (currentPage: number) => ({type: '/CARDS/SET-CURRENT-PAGE', currentPage} as const),
    setPageSizeCardsAC: (currentPage: number, pageSize: number) => ({
        type: '/CARDS/SET-PAGE-SIZE',
        currentPage,
        pageSize
    } as const),

    setSortCardsAC: (sortCards: string) => ({type: '/CARDS/SET-SORT-CARDS', sortCards} as const),
    setCardsLoading: (loading: boolean) => ({type: '/CARDS/SET_LOADING', loading,} as const),
    setCardsSuccess: (success: boolean) => ({type: '/CARDS/SET_SUCCESS', success,} as const),


};
export const getCardsTC = (id: string): ThunkType => async (
    dispatch, getState
) => {
    const {
        cardQuestion, maxGrade, minGrade, sortCards, currentPage, pageSize
    } = getState().cards;
    dispatch(CardsActions.setCardsLoading(true));
    try {
        const data = await CardsAPI.getCards(id, cardQuestion, maxGrade, minGrade,
            sortCards, currentPage, pageSize);
        dispatch(CardsActions.setCardsAC(data.cards));
        dispatch(CardsActions.setCardsTotalCount(data.cardsTotalCount));
        dispatch(CardsActions.setCardsSuccess(true));
        console.log('Get cards Success!', data);
    } catch (e) {
        dispatch(appActions.setServerError(e.response.data.error));
    }
};
export const updateCardTC = (id: string, pack_id: string, cardQuestion: string, cardAnswer?: string): ThunkType => async (
    dispatch) => {

    try {
        await CardsAPI.updateCard(id, cardQuestion, cardAnswer);
        dispatch(getCardsTC(pack_id));
    } catch (e) {
        dispatch(appActions.setServerError(e.error));
    }
};

export const deleteCardTC = (id: string, pack_id: string): ThunkType => async (dispatch) => {
    try {
        await CardsAPI.deleteCard(id);
        dispatch(getCardsTC(pack_id));
    } catch (e) {
        dispatch(appActions.setServerError(e.error));
    }
};
export const addCardTC = (id: string, cardQuestion: string, cardAnswer?: string): ThunkType => async (
    dispatch) => {
    try {
        await CardsAPI.addCard(id, cardQuestion, cardAnswer);
        dispatch(getCardsTC(id));
    } catch (e) {
        dispatch(appActions.setServerError(e.error));
    }
};

export const gradeCardsTC = (grade: number, card_id: string): ThunkType =>
    async (dispatch) => {
        try {
            await CardsAPI.gradeCard(grade, card_id);
            console.log('grade good');
        } catch (e) {
            dispatch(appActions.setServerError(e.error));
        }
    };
export type CardsActionsType = InferActionsTypes<typeof CardsActions> | authActionsType;
type ThunkType = BaseThunkType<CardsActionsType | AppActionsType>;

