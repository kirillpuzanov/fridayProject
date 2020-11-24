import {BaseThunkType, InferActionsTypes} from '../../../main/m2-bll/store';
import {packsAPI} from '../f-2_dal/packsAPI';


export const CardPacksInitState = {
    cardPacks: [] as CardPackType[],
    cardPacksTotalCount: 0,

    sortMax: 50,
    sortMin: 0,
    packName: '',
    currentPage: 1,
    pageSize: 5,
    sortPacks: '0updated',
    user_id: '',

    tableLoading: false,
    tableSuccess: false,
    tableError: '',
}

export const cardPacksReducer = (state: CardPacksStateType = CardPacksInitState, action: CardPackActionsType): CardPacksStateType => {
    switch (action.type) {
        case '/CARD_PACK/PACKS-TOTAL-COUNT':
            return {...state, cardPacksTotalCount: action.totalCount}
        case '/CARD_PACK/SET_PACKS':
            return {...state, cardPacks: action.cardPacks};
        case '/CARD_PACK/SET_PACK_USER_ID':
            return {...state, user_id: action.userPack_id,};

        case '/CARD_PACK/SET-SORT-MAX':
            return {...state, sortMax: action.sortMax}
        case '/CARD_PACK/SET-SORT-MIN':
            return {...state, sortMin: action.sortMin}
        case '/CARD_PACK/SET-PACK-NAME':
            return {...state, packName: action.searchName}
        case '/CARD_PACK/SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case '/CARD_PACK/SET-PAGE-SIZE':
            return {...state, currentPage: action.currentPage, pageSize: action.pageSize}
        case '/CARD_PACK/SET-SORT-PACKS':
            return {...state, sortPacks: action.sortPacks}
        case '/CARD_PACK/SET-USER-ID':
            return {...state, sortPacks: action.UserId}

        case '/CARD_PACK/SET-TABLE-LOADING':
            return {...state, tableLoading: action.tableLoading}
        case '/CARD_PACK/SET-TABLE-SUCCESS':
            return {...state, tableSuccess: action.tableSuccess}
        case '/CARD_PACK/SET-TABLE-ERROR':
            return {...state, tableError: action.tableError}
        default:
            return state
    }
}


//action's
export const cardPackActions = {
    setPacksTotalCount: (totalCount: number) => ({type: '/CARD_PACK/PACKS-TOTAL-COUNT', totalCount} as const),
    setCardDeckAC: (cardPacks: Array<CardPackType>) => ({type: '/CARD_PACK/SET_PACKS', cardPacks} as const),
    setUserPack_id: (userPack_id: string) => ({type: '/CARD_PACK/SET_PACK_USER_ID', userPack_id} as const),

    setSortMaxAC: (sortMax: number) => ({type: '/CARD_PACK/SET-SORT-MAX', sortMax} as const),
    setSortMinAC: (sortMin: number) => ({type: '/CARD_PACK/SET-SORT-MIN', sortMin} as const),
    setPacksNameAC: (searchName: string) => ({type: '/CARD_PACK/SET-PACK-NAME', searchName} as const),
    setCurrentPageAC: (currentPage: number) => ({type: '/CARD_PACK/SET-CURRENT-PAGE', currentPage} as const),
    setPageSizeAC: (currentPage: number, pageSize: number) => ({
        type: '/CARD_PACK/SET-PAGE-SIZE',
        currentPage,
        pageSize
    } as const),
    setSortPacksAC: (sortPacks: string) => ({type: '/CARD_PACK/SET-SORT-PACKS', sortPacks} as const),
    setUserIdAC: (UserId: string) => ({type: '/CARD_PACK/SET-USER-ID', UserId} as const),
    setTableLoadingAC: (tableLoading: boolean) => ({type: '/CARD_PACK/SET-TABLE-LOADING', tableLoading} as const),
    setTableSuccessAC: (tableSuccess: boolean) => ({type: '/CARD_PACK/SET-TABLE-SUCCESS', tableSuccess} as const),
    setTableErrorAC: (tableError: string) => ({type: '/CARD_PACK/SET-TABLE-ERROR', tableError} as const),
}


// thunk's
export const CardPackTC = (): ThunkType =>
    async (dispatch, getState) => {
        const {sortMax, sortMin, packName, currentPage, pageSize, sortPacks, user_id} = getState().cardPack
        dispatch(cardPackActions.setTableLoadingAC(true))
        try {
            const response = await packsAPI
                .getCardPacks(sortMax, sortMin, packName, currentPage, pageSize, sortPacks, user_id)
            if (response.error) {
                dispatch(cardPackActions.setTableErrorAC(response.error));
                console.log('Get Products Error!', response.error)
            } else {
                dispatch(cardPackActions.setCardDeckAC(response.cardPacks));
                dispatch(cardPackActions.setPacksTotalCount(response.cardPacksTotalCount))
                dispatch(cardPackActions.setTableSuccessAC(true))

                console.log('Neko Get Products Success!', response)
            }

        } catch (e) {
            dispatch(cardPackActions.setTableErrorAC(e.response ? e.response.data.error : e.message));
            console.log('Get Products Error!', {...e})
        }
        dispatch(cardPackActions.setTableLoadingAC(false))
    }

export const addPack = (): ThunkType => async (dispatch
) => {
    try {
        const data = await packsAPI.addPack();
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
        const data = await packsAPI.deletePack(packId);
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
        const data = await packsAPI.updatePack(packId);
        dispatch(CardPackTC());
        console.log(data);
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
        console.log(error);
        return error;
    }
};

//type's
export type CardPacksStateType = typeof CardPacksInitState;
export type CardPackActionsType = InferActionsTypes<typeof cardPackActions>
export type ThunkType = BaseThunkType<CardPackActionsType>;
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
