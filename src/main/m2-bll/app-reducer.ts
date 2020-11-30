import {BaseThunkType, InferActionsTypes} from './store';
import {authAPI} from '../../features/f-1-all/f-1_autorization/f-1_dal/authAPI';
import {authActions, authActionsType} from '../../features/f-1-all/f-1_autorization/f-1_bll/auth-reducer';
import {profileActions, ProfileActionsType} from './profile-reducer';


const initialState = {
    isInitializing: false,
    initializeError: '',
}
export const appReducer = (state: AppInitialStateType = initialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case '/APP/SET-INITIALIZED':
            return {...state, isInitializing: action.isInitializing}
        case '/INITIALIZE/SET-ERROR':
            return {...state, initializeError: action.initialiseError}
        default:
            return state
    }
}

//actions
export const appActions = {
    setInitializing: (isInitializing: boolean) => ({type: '/APP/SET-INITIALIZED', isInitializing} as const),
    setInitializeError: (initialiseError: string) => ({type: '/INITIALIZE/SET-ERROR', initialiseError} as const),
}
// thunks
export const AuthMe = (): ThunkType => async (dispatch) => {
        try {
            let response = await authAPI.authMe()
            dispatch(profileActions.setProfileAC(response))
            dispatch(authActions.setIsAuthAC(true))
        } catch (err) {
            const error = err.response
                ? err.response.data.error
                : (err + ' ... О-оу зовите бородатых сеньоров!!');
            dispatch(appActions.setInitializeError(error))
        }
        dispatch(appActions.setInitializing(true))
    }




export type AppInitialStateType = typeof initialState
type ThunkType = BaseThunkType<AppActionsType>
export type AppActionsType = InferActionsTypes<typeof appActions>
    | ProfileActionsType
    | authActionsType

