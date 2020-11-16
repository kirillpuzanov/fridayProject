import {BaseThunkType, InferActionsTypes} from './store';
import {authAPI} from '../m3-dal/authAPI';

//actions
export const signInActions = {
    setRegisterSuccess: () => ({type: '/REG/SET-REGISTER-SUCCESS'} as const),
    setLoading: (loading: boolean) => ({type: '/REG/SET-LOADING', loading} as const),
    setError: (error: string) => ({type: '/REG/SET-ERROR', error} as const),
}

//thunk's
export const registerTC = (email: string, password: string): ThunkType => (dispatch) => {
    dispatch(signInActions.setLoading(true))
    authAPI.register(email, password)
        .then(response => {
            if (response.addedUser) dispatch(signInActions.setRegisterSuccess())
        })
        .catch(err => {
            dispatch(signInActions.setError(JSON.stringify(err.response.data.error)))
        })
        .finally(() => dispatch(signInActions.setLoading(false)))
}


const initialState = {
    loading: false,
    error: '',
    registerSuccess: false
}
export const registrationReducer = (state: initialStateType = initialState, action: RegistrationActionsType): initialStateType => {
    switch (action.type) {
        case '/REG/SET-ERROR':
            return {...state, error: action.error}
        case '/REG/SET-REGISTER-SUCCESS':
            return {...state, registerSuccess: true}
        case '/REG/SET-LOADING':
            return {...state, loading: action.loading}

        default:
            return state
    }
}
export type initialStateType = typeof initialState
type ThunkType = BaseThunkType<RegistrationActionsType>
type RegistrationActionsType = InferActionsTypes<typeof signInActions>

