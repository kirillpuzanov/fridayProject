import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {profileReducer} from './profile-reducer';
import {appReducer} from './app-reducer';
import {authReducer} from './auth-reducer';
import {cardPackReducer} from '../../features/f-1-cards/c-1-packs/p2-bll/cardPack-reducer';

const reducers = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    app: appReducer,
    cardPack: cardPackReducer,
    //newPassword: setNewPasswordReducer
});


export let store = createStore(reducers, applyMiddleware(thunk));
// @ts-ignore
window.store = store

//actions type
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
//thunk's type
export type BaseThunkType<A extends Action = Action, R = any> = ThunkAction<R, AppStateType, unknown, A>
//state type
export type AppStateType = ReturnType<typeof reducers>;
