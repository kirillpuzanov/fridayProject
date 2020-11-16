import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {signInReducer} from './signIn-reducer';
import {registrationReducer} from './registration-reducer';
import {profileReducer} from './profile-reducer';
import {appReducer} from './app-reducer';


//actions type
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
//thunk's type
export type BaseThunkType<A extends Action = Action, R = any> = ThunkAction<R, AppStateType, unknown, A>
//state type
export type AppStateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    signIn: signInReducer,
    registration: registrationReducer,
    profile:profileReducer,
    app: appReducer,
    //newPassword: setNewPasswordReducer
});


export let store = createStore(reducers, applyMiddleware(thunk));
// @ts-ignore
window.store = store