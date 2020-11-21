import {CardDeckType, ProfileType} from '../m3-dal/authAPI';
import {InferActionsTypes} from './store';


const initialState = {
    cardDeck: {} as CardDeckType,
}
export const cardDeckReducer = (state: ProfileInitialStateType = initialState, action: ProfileActionsType):ProfileInitialStateType => {
    switch (action.type) {
        case '/PROFILE/SET-PROFILE': return { ...state}
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
