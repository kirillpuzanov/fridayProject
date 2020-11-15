import {BaseThunkType, InferActionsTypes} from './store';
import {authAPI, LoginParamsType} from '../m3-dal/api';


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
export const SingInTC = (data:LoginParamsType):ThunkType => async (dispatch) => {
    // dispatch(setAppStatusAC('loading'))
    try {
        const response = await authAPI.login(data)
        if (!response.data.error){
            dispatch(signInActions.setIsLoggedInAC(true))
        }
    }
    catch (e){
        const error = e.response ? e.response.data.error :(e.message +',more details on the console');

    }
}



type initialStateType = typeof initialState
type ThunkType = BaseThunkType<SignInActionsType>
type SignInActionsType = InferActionsTypes<typeof signInActions>

