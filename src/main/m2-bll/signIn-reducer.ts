import {BaseThunkType, InferActionsTypes} from './store';
import {authAPI} from '../m3-dal/api';


const initialState = {
    isLoggedIn: false
}
export const signInReducer = (state: initialStateType = initialState, action: SignInActionsType):initialStateType => {
    switch (action.type) {
        case 'singIn/SET-IS-LOGGED-IN':
            return  {...state, isLoggedIn: action.value}


        default:
            return state
    }
}
//actions
const signInActions = {
    setIsLoggedInAC: (value:boolean) => ({type: 'singIn/SET-IS-LOGGED-IN',value} as const),
}

//thunk's
// export const SingInTC = (test1:any):ThunkType => (dispatch) => {
//     dispatch(setAppStatusAC('loading'))
//
//     dispatch(signInActions.setIsLoggedInAC(test1))
// } TODO I need API




type initialStateType = typeof initialState
type ThunkType = BaseThunkType<SignInActionsType>
type SignInActionsType = InferActionsTypes<typeof signInActions>

