import {ProfileType} from '../m3-dal/authAPI';
import {InferActionsTypes} from './store';


const initialState = {
    profile: {} as ProfileType,
}
export const cardDeckReducer = (state: ProfileInitialStateType = initialState, action: ProfileActionsType):ProfileInitialStateType => {
    switch (action.type) {
        case '/PROFILE/SET-PROFILE': return { ...state, profile: {...action.profile}}
        default:
            return state
    }
}


//actions
export const profileActions = {
    setProfileAC: (profile: ProfileType) => ({type: '/PROFILE/SET-PROFILE', profile} as const),
}

export type ProfileInitialStateType = typeof initialState;
export type ProfileActionsType = InferActionsTypes<typeof profileActions>
