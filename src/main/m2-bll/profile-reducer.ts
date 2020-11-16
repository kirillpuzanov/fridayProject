import {BaseThunkType, InferActionsTypes} from './store';
import {ProfileType} from '../m3-dal/authAPI';


const initialState = {
    profile: {} as ProfileType,
}
export const profileReducer = (state: initialStateType = initialState, action: ProfileActionsType):initialStateType => {
    switch (action.type) {
        case 'profile/SET-PROFILE': return { ...state, profile: {...action.profile}}
        default:
            return state
    }
}


//actions
export const profileActions = {
    setProfileAC: (profile: ProfileType) => ({type: 'profile/SET-PROFILE', profile} as const),
}

type initialStateType = typeof initialState
type ThunkType = BaseThunkType<ProfileActionsType>
export type ProfileActionsType = InferActionsTypes<typeof profileActions>

