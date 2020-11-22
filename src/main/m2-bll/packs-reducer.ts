import {BaseThunkType, InferActionsTypes} from './store';
import {packsAPI} from '../m3-dal/packsAPI';
import {PackAPI} from '../../features/f-1-cards/c-1-packs/p3-dal/cardPackAPI';
import {
    cardPackActions,
    CardPackActionsType,
    GetAppStoreType
} from '../../features/f-1-cards/c-1-packs/p2-bll/cardPack-reducer';


export const PacksInitState = {
    packs: [] as PackType[],
    cardPacksTotalCount: 0,

    sortMax: 50,
    sortMin: 0,
    packName: '',
    currentPage: 1,
    pageSize: 5,
    sortPacks: '0updated',
    packUser_id: '',

    tableLoading: false,
    tableSuccess: false,
    tableError: '',
}

export const packsReducer = (state: PacksStateType = PacksInitState, action: PacksActionsType): PacksStateType => {
    switch (action.type) {
        case '/PACKS/PACKS-TOTAL-COUNT':
            return {...state, cardPacksTotalCount: action.totalCount}

        case '/PACKS/SET-SORT-MAX':
            return {...state, sortMax: action.sortMax}
        case '/PACKS/SET-SORT-MIN':
            return {...state, sortMin: action.sortMin}
        case '/PACKS/SET-PACK-NAME':
            return {...state, packName: action.searchName}
        case '/PACKS/SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case '/PACKS/SET-PAGE-SIZE':
            return {...state, currentPage: action.currentPage, pageSize: action.pageSize}
        case '/PACKS/SET-SORT-PACKS':
            return {...state, sortPacks: action.sortPacks}
        case '/PACKS/SET-USER-ID':
            return {...state, sortPacks: action.UserId}

        case '/PACKS/SET-TABLE-LOADING':
            return {...state, tableLoading: action.tableLoading}
        case '/PACKS/SET-TABLE-SUCCESS':
            return {...state, tableSuccess: action.tableSuccess}
        case '/PACKS/SET-TABLE-ERROR':
            return {...state, tableError: action.tableError}
        default:
            return state
    }
}


//action's
export const packsActions = {
    setPacksTotalCount: (totalCount: number) => ({type: '/PACKS/PACKS-TOTAL-COUNT', totalCount} as const),

    setSortMaxAC: (sortMax: number) => ({type: '/PACKS/SET-SORT-MAX', sortMax} as const),
    setSortMinAC: (sortMin: number) => ({type: '/PACKS/SET-SORT-MIN', sortMin} as const),
    setPacksNameAC: (searchName: string) => ({type: '/PACKS/SET-PACK-NAME', searchName} as const),
    setCurrentPageAC: (currentPage: number) => ({type: '/PACKS/SET-CURRENT-PAGE', currentPage} as const),
    setPageSizeAC: (currentPage: number, pageSize: number) => ({
        type: '/PACKS/SET-PAGE-SIZE',
        currentPage,
        pageSize
    } as const),
    setSortPacksAC: (sortPacks: string) => ({type: '/PACKS/SET-SORT-PACKS', sortPacks} as const),
    setUserIdAC: (UserId: string) => ({type: '/PACKS/SET-USER-ID', UserId} as const),
    setTableLoadingAC: (tableLoading: boolean) => ({type: '/PACKS/SET-TABLE-LOADING', tableLoading} as const),
    setTableSuccessAC: (tableSuccess: boolean) => ({type: '/PACKS/SET-TABLE-SUCCESS', tableSuccess} as const),
    setTableErrorAC: (tableError: string) => ({type: '/PACKS/SET-TABLE-ERROR', tableError} as const),
}


// thunk's
export const getPacks = (): ThunkType =>
    async (dispatch, getState) => {
        const {sortMax, sortMin, packName, currentPage, pageSize, sortPacks, packUser_id} = getState().pack
        dispatch(packsActions.setTableLoadingAC(true))
        try {
            const response = await PackAPI
                .getCardPacks(sortMax, sortMin, packName, currentPage, pageSize, sortPacks, packUser_id)
            if (response.error) {
                dispatch(packsActions.setTableErrorAC(response.error));
                console.log('Get Products Error!', response.error)
            } else {
                dispatch(cardPackActions.setCardDeckAC(response.cardPacks));
                dispatch(packsActions.setPacksTotalCount(response.cardPacksTotalCount))
                dispatch(packsActions.setTableSuccessAC(true))

                console.log('Neko Get Products Success!', response)
            }

        } catch (e) {
            dispatch(packsActions.setTableErrorAC(e.response ? e.response.data.error : e.message));
            console.log('Get Products Error!', {...e})
        }
        dispatch(packsActions.setTableLoadingAC(false))
    }
// export const CardPackTC = (): ThunkType =>
//     async (dispatch
//         , getStore: GetAppStoreType) => {
//         try {
//             const {userPack_id} = getStore().cardPack;
//             const data = await PackAPI.getCardPacks(userPack_id);
//             dispatch(cardPackActions.setCardDeckAC(data.cardPacks));
//         } catch (e) {
//             const error = e.response ? e.response.data.error : (e.message + ',more details in the console');
//             console.log(error);
//             return error;
//         }
//     };


//type's
export type PacksStateType = typeof PacksInitState;
export type PacksActionsType = InferActionsTypes<typeof packsActions> | CardPackActionsType
export type ThunkType = BaseThunkType<PacksActionsType>;
export type PackType = {
    _id: string;
    user_id: string;
    user_name: string;
    private: boolean;

    name: string;
    path: string;
    grade: number; // back count
    shots: number; // back count

    cardsCount: number; // back count
    deckCover: string;

    type: string;
    rating: number; // hz
    more_id: string;

    created: string;
    updated: string;
    __v:number
}
