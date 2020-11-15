import {BaseThunkType, InferActionsTypes} from './store';
import {authAPI, LoginParamsType} from '../m3-dal/api';


const initialState = {
    isAuth: false,
    // errorP: {e:false}
    errorP: false
};
export const signInReducer = (state: initialStateType = initialState, action: SignInActionsType): initialStateType => {
    switch (action.type) {
        case 'singIn/SET-IS-AUTH':
            // return {...state,
            //     isAuth: action.isAuth,
            //     errorP: action.errorP};
            return {
                ...state,
                isAuth: action.isAuth,
                // errorP: {e:action.errorP}
                errorP: action.errorP
            };


        default:
            return state;
    }
};
//actions
const signInActions = {

    setIsAuthAC: (isAuth: boolean, errorP: boolean) => ({type: 'singIn/SET-IS-AUTH', isAuth, errorP} as const),
};

//thunk's
export const SingInTC = (data: LoginParamsType): ThunkType => async (dispatch) => {
    // dispatch(setAppStatusAC('loading'))

    try {
        const response = await authAPI.login(data);
        debugger
            dispatch(signInActions.setIsAuthAC(true, false));

    } catch (e) {

        debugger

        const error = e.response ? e.response.data.error : (e.message + ',more details on the console');
        console.log(error + 'hey');
        dispatch(signInActions.setIsAuthAC(false, true));
return error;

    }
};


type initialStateType = typeof initialState
type ThunkType = BaseThunkType<SignInActionsType>
type SignInActionsType = InferActionsTypes<typeof signInActions>

