import {BaseThunkType, InferActionsTypes} from './store';
import {authAPI, LoginParamsType} from '../m3-dal/authAPI';
import {profileActions, ProfileActionsType} from './profile-reducer';


export const AuthInitialState = {
    isAuth: false,
    loading: false,
    error: '',
    registerSuccess: false
};
export const authReducer = (state: AuthInitialStateType = AuthInitialState, action: authActionsType): AuthInitialStateType => {
    switch (action.type) {
        case 'singIn/SET-IS-AUTH':
            return {...state, isAuth: action.isAuth}
        case '/REG/SET-ERROR':
            return {...state, error: action.error}
        case '/REG/SET-REGISTER-SUCCESS':
            return {...state, registerSuccess: true}
        case '/REG/SET-LOADING':
            return {...state, loading: action.loading}

        default:
            return state;
    }
};

//actions
export const authActions = {
    setIsAuthAC: (isAuth: boolean) => ({type: 'singIn/SET-IS-AUTH', isAuth} as const),
    setRegisterSuccess: () => ({type: '/REG/SET-REGISTER-SUCCESS'} as const),
    setLoading: (loading: boolean) => ({type: '/REG/SET-LOADING', loading} as const),
    setError: (error: string) => ({type: '/REG/SET-ERROR', error} as const),
};

//thunk's
export const SingInTC = (data: LoginParamsType): ThunkType =>
    async (dispatch) => {
    try {
        const response = await authAPI.login(data);
        dispatch(authActions.setIsAuthAC(true));
        dispatch(profileActions.setProfileAC(response.data))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ',more details on the console');
        dispatch(authActions.setIsAuthAC(false));
        console.log(error);
        return error;
    }
};
export const registerTC = (email: string, password: string): ThunkType =>
    async (dispatch) => {
        dispatch(authActions.setLoading(true))
        try {
            let response = await authAPI.register(email, password)
            if (response.addedUser) dispatch(authActions.setRegisterSuccess())
        } catch (err) {
            dispatch(authActions.setError(JSON.stringify(err.response.data.error)))
        }
        dispatch(authActions.setLoading(false))
    };

export const logoutTC = (): ThunkType =>
    async (dispatch) => {
    try {
        await authAPI.logout()
        dispatch(authActions.setIsAuthAC(false))
    } catch (err) {
        console.log(err.response.data.error)
    }
};

export type AuthInitialStateType = typeof AuthInitialState;
type ThunkType = BaseThunkType<authActionsType>;
export type authActionsType = InferActionsTypes<typeof authActions>
    | ProfileActionsType;

