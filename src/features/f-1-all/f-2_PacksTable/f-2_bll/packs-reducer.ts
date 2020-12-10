import {BaseThunkType, InferActionsTypes} from '../../../../main/m2-bll/store';
import {packsAPI} from '../f-2_dal/packsAPI';
import {authActionsType} from '../../f-1_autorization/f-1_bll/auth-reducer';
import {appActions, AppActionsType} from '../../../../main/m2-bll/app-reducer';


export const PacksInitState = {
    cardPacks: [] as PackType[],
    cardPacksTotalCount: 0,

    sortMax: 100,
    sortMin: 0,
    packName: '',
    currentPage: 1,
    pageSize: 5,
    sortPacks: '0updated',
    user_id: '',

    tableLoading: false,
    tableSuccess: false,
    tableError: '',
};

export const packsReducer = (state: PacksStateType = PacksInitState, action: PackActionsType): PacksStateType => {
    switch (action.type) {
        case '/PACK/PACKS-TOTAL-COUNT':
            return {...state, cardPacksTotalCount: action.totalCount};
        case '/PACK/SET_PACKS':
            return {...state, cardPacks: action.cardPacks};
        case '/PACK/SET_PACK_USER_ID':
            return {...state, user_id: action.userPack_id,};

        case '/PACK/SET-SORT-MAX':
            return {...state, sortMax: action.sortMax};
        case '/PACK/SET-SORT-MIN':
            return {...state, sortMin: action.sortMin};
        case '/PACK/SET-PACK-NAME':
            return {...state, packName: action.searchName};
        case '/PACK/SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage};
        case '/PACK/SET-PAGE-SIZE':
            return {...state, currentPage: action.currentPage, pageSize: action.pageSize};
        case '/PACK/SET-SORT-PACKS':
            return {...state, sortPacks: action.sortPacks};

        case '/PACK/SET-TABLE-LOADING':
            return {...state, tableLoading: action.tableLoading};
        case '/PACK/SET-TABLE-SUCCESS':
            return {...state, tableSuccess: action.tableSuccess};
        // case  '/PACK/ADD-NEW-PACK':
        //     return {...state, packName: action.packName};
        default:
            return state;
    }
};

//action's
export const packActions = {
    setPacksTotalCount: (totalCount: number) => ({type: '/PACK/PACKS-TOTAL-COUNT', totalCount} as const),
    setPacksAC: (cardPacks: Array<PackType>) => ({type: '/PACK/SET_PACKS', cardPacks} as const),
    setUserPack_id: (userPack_id: string) => ({type: '/PACK/SET_PACK_USER_ID', userPack_id} as const),

    setSortMaxAC: (sortMax: number) => ({type: '/PACK/SET-SORT-MAX', sortMax} as const),
    setSortMinAC: (sortMin: number) => ({type: '/PACK/SET-SORT-MIN', sortMin} as const),
    setPacksNameAC: (searchName: string) => ({type: '/PACK/SET-PACK-NAME', searchName} as const),
    setCurrentPageAC: (currentPage: number) => ({type: '/PACK/SET-CURRENT-PAGE', currentPage} as const),
    setPageSizeAC: (currentPage: number, pageSize: number) => ({
        type: '/PACK/SET-PAGE-SIZE',
        currentPage,
        pageSize
    } as const),
    setSortPacksAC: (sortPacks: string) => ({type: '/PACK/SET-SORT-PACKS', sortPacks} as const),
    setTableLoadingAC: (tableLoading: boolean) => ({type: '/PACK/SET-TABLE-LOADING', tableLoading} as const),
    setTableSuccessAC: (tableSuccess: boolean) => ({type: '/PACK/SET-TABLE-SUCCESS', tableSuccess} as const),
    setAddNewPackAC: (packName: string) => ({type: '/PACK/ADD-NEW-PACK', packName} as const)
};


// thunk's
export const PackTC = (): ThunkType =>
    async (dispatch, getState) => {
        const {sortMax, sortMin, packName, currentPage, pageSize, sortPacks, user_id} = getState().packs;
        dispatch(packActions.setTableLoadingAC(true));
        try {
            const response = await packsAPI
                .getCardPacks(sortMax, sortMin, packName, currentPage, pageSize, sortPacks, user_id);
            dispatch(packActions.setPacksAC(response.cardPacks));
            dispatch(packActions.setPacksTotalCount(response.cardPacksTotalCount));
            dispatch(packActions.setTableSuccessAC(true));
            console.log('Get packs Success!', response);
        } catch (e) {
            dispatch(appActions.setServerError(e.response.data.error));
        }
        dispatch(packActions.setTableLoadingAC(false));
    };

export const addPack = (packName?: string): ThunkType => async (dispatch
) => {
    try {
        await packsAPI.addPack(packName);
        // packActions.setAddNewPackAC(packName)
        dispatch(PackTC());
    } catch (e) {
        dispatch(appActions.setServerError(e.response.data.error));
    }
};

export const deletePack = (packId: string): ThunkType => async (dispatch
) => {
    try {
        await packsAPI.deletePack(packId);
        dispatch(PackTC());
    } catch (e) {
        dispatch(appActions.setServerError(e.response.data.error));
    }
};
export const updatePack = (packId: string, packName?: string): ThunkType => async (dispatch
) => {
    try {
        await packsAPI.updatePack(packId, packName);
        dispatch(PackTC());
    } catch (e) {
        dispatch(appActions.setServerError(e.response.data.error));
    }
};

//type's
export type PacksStateType = typeof PacksInitState;
export type PackActionsType = InferActionsTypes<typeof packActions> | authActionsType;
export type ThunkType = BaseThunkType<PackActionsType | AppActionsType>;
export type PackType = {
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
