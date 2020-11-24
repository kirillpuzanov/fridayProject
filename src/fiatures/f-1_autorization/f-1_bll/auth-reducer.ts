import {BaseThunkType, InferActionsTypes} from '../../../main/m2-bll/store';
import {authAPI, LoginParamsType} from '../f-1_dal/authAPI';
import {profileActions, ProfileActionsType} from '../../../main/m2-bll/profile-reducer';
import {RecoveryPassObjType} from '../f-1_ui/recoveryPassword/RecoveryPasswordContainer';
import {setNewPassDatatype} from '../f-1_ui/setNewPassword/SetNewPasswordContainer';


export const AuthInitialState = {
    isAuth: false,
    loading: false,
    error: '',
    registerSuccess: false,
    recoveryPassSuccess: false,
    newPassSuccess: false,
};
export const authReducer = (state: AuthInitialStateType = AuthInitialState, action: authActionsType): AuthInitialStateType => {
    switch (action.type) {
        case 'singIn/SET-IS-AUTH':
            return {...state, isAuth: action.isAuth}
        case '/SERVER-ERROR/SET-ERROR':
            return {...state, error: action.error}
        case '/REG/SET-REGISTER-SUCCESS':
            return {...state, registerSuccess: true}
        case '/REG/SET-LOADING':
            return {...state, loading: action.loading}
        case '/REC/SET-RECOVERY-PASS-SUCCESS':
            return {...state, recoveryPassSuccess: true}
        case '/NEW-PASS/SET-NEW-PASS-SUCCESS':
            return {...state, newPassSuccess: true}
        default:
            return state;
    }
};

//action's
export const authActions = {
    setIsAuthAC: (isAuth: boolean) => ({type: 'singIn/SET-IS-AUTH', isAuth} as const),
    setRegisterSuccess: () => ({type: '/REG/SET-REGISTER-SUCCESS'} as const),
    setRecoveryPassSuccess: () => ({type: '/REC/SET-RECOVERY-PASS-SUCCESS'} as const),
    setNewPassSuccess: () => ({type: '/NEW-PASS/SET-NEW-PASS-SUCCESS'} as const),
    setLoading: (loading: boolean) => ({type: '/REG/SET-LOADING', loading} as const),
    setError: (error: string) => ({type: '/SERVER-ERROR/SET-ERROR', error} as const),
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
            dispatch(authActions.setError(err.response.data.error))
        }
        dispatch(authActions.setLoading(false))
    };

export const logoutTC = (): ThunkType =>
    async (dispatch) => {
        try {
            await authAPI.logout()
            dispatch(authActions.setIsAuthAC(false))
        } catch (err) {
            dispatch(authActions.setError(err.response.data.error))
        }
    };
export const recoveryPassTC = (RecoveryPassObj: RecoveryPassObjType): ThunkType =>
    async (dispatch) => {
        try {
            await authAPI.recoveryPass(RecoveryPassObj)
            dispatch(authActions.setRecoveryPassSuccess())
        } catch (err) {
            dispatch(authActions.setError(err.response.data.error))
        }
    };
export const setNewPassTC = (setNewPassData: setNewPassDatatype): ThunkType => async (dispatch) => {
    try {
        await authAPI.newPass(setNewPassData)
        dispatch(authActions.setNewPassSuccess())
    } catch (err) {
        dispatch(authActions.setError(err.response.data.error))
    }
}

//type's
export type AuthInitialStateType = typeof AuthInitialState;
export type ThunkType = BaseThunkType<authActionsType>;
export type authActionsType = InferActionsTypes<typeof authActions>
    | ProfileActionsType;

