import {BaseThunkType, InferActionsTypes} from './store';
import {authAPI} from '../m3-dal/authAPI';
import {signInActions, SignInActionsType} from './signIn-reducer';
import {ProfileActionsType} from './profile-reducer';


const initialState = {
    isInitializing: false,
}
export const appReducer = (state: AppInitialStateType = initialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case '/APP/SET-INITIALIZED':
            return {...state, isInitializing: action.isInitializing}
        default:
            return state
    }
}

//actions
export const appActions = {
    setLoading: (loading: boolean) => ({type: '/APP/SET-LOADING', loading} as const),
    setInitialized: (isInitializing: boolean) => ({type: '/APP/SET-INITIALIZED', isInitializing} as const),
}
// ' "типа санка" '
export const AuthMe = (): ThunkType => (dispatch) => {
    if (authAPI.getCookie('token')) {
        dispatch(signInActions.setIsAuthAC(true));
        dispatch(appActions.setInitialized(true))
    } else {
        dispatch(appActions.setInitialized(true))
        console.log('not authorising, app-reducer/AuthMe' )
    }
}



export type AppInitialStateType = typeof initialState
type ThunkType = BaseThunkType<AppActionsType>
export type AppActionsType = InferActionsTypes<typeof appActions> | SignInActionsType | ProfileActionsType

