import {BaseThunkType, InferActionsTypes} from './store';
import {authAPI} from '../m3-dal/authAPI';
import {authActions, authActionsType} from './auth-reducer';
import {profileActions, ProfileActionsType} from './profile-reducer';


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
    setInitializing: (isInitializing: boolean) => ({type: '/APP/SET-INITIALIZED', isInitializing} as const),
}
// thunks
export const AuthMe = (): ThunkType =>
    async (dispatch) => {
    try{
        let response = await authAPI.authMe()
        dispatch(profileActions.setProfileAC(response))
        dispatch(authActions.setIsAuthAC(true))
    } catch (err){
        // флаг isAuth стается false редирект на логин автом. console.log просто так
        console.log(err.response.data.error)
    }
    dispatch(appActions.setInitializing(true))
}


export type AppInitialStateType = typeof initialState
type ThunkType = BaseThunkType<AppActionsType>
export type AppActionsType = InferActionsTypes<typeof appActions>
    | ProfileActionsType
    | authActionsType

