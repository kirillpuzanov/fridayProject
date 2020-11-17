import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {profileReducer} from './profile-reducer';
import {appReducer} from './app-reducer';
import {authReducer} from './auth-reducer';


//actions type
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
//thunk's type
export type BaseThunkType<A extends Action = Action, R = any> = ThunkAction<R, AppStateType, unknown, A>
//state type
export type AppStateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    // signIn: signInReducer,
    // registration: registrationReducer,
    auth:authReducer,
    profile:profileReducer,
    app: appReducer,
    //newPassword: setNewPasswordReducer
});


export let store = createStore(reducers, applyMiddleware(thunk));
// @ts-ignore
window.store = store