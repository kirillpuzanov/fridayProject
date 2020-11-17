// import {BaseThunkType, InferActionsTypes} from './store';
// import {authAPI, LoginParamsType} from '../m3-dal/authAPI';
// import {profileActions, ProfileActionsType} from './profile-reducer';
//
//
// const initialState = {
//     isAuth: false,
// };
// export const signInReducer = (state: initialStateType = initialState, action: SignInActionsType): initialStateType => {
//     switch (action.type) {
//         case 'singIn/SET-IS-AUTH':
//             return {
//                 ...state,
//                 isAuth: action.isAuth,
//             };
//         default:
//             return state;
//     }
// };
//
//
// //actions
// export const signInActions = {
//     setIsAuthAC: (isAuth: boolean) => ({type: 'singIn/SET-IS-AUTH', isAuth} as const),
// };
//
// //thunk's
// export const SingInTC = (data: LoginParamsType): ThunkType => async (dispatch) => {
//     try {
//         const response = await authAPI.login(data);
//         dispatch(signInActions.setIsAuthAC(true));
//         dispatch(profileActions.setProfileAC(response.data))
//
//     } catch (e) {
//         const error = e.response ? e.response.data.error : (e.message + ',more details on the console');
//         dispatch(signInActions.setIsAuthAC(false));
//         console.log(error);
//         return error;
//     }
// };
//
// type initialStateType = typeof initialState;
// type ThunkType = BaseThunkType<SignInActionsType>;
// export type SignInActionsType = InferActionsTypes<typeof signInActions>
//     | ProfileActionsType;
//
export default 1