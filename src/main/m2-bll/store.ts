import {Action, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';
import {profileReducer} from './profile-reducer';
import {appReducer} from './app-reducer';
import {authReducer} from '../../features/f-1-all/f-1_autorization/f-1_bll/auth-reducer';
import {packsReducer} from '../../features/f-1-all/f-2_PacksTable/f-2_bll/packs-reducer';
import {cardsReducer} from '../../features/f-1-all/f-3_CardsTable/c2-bll/cards-reducer';


//actions type
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
//thunk's type
export type BaseThunkType<A extends Action = Action, R = any> = ThunkAction<R, AppStateType, unknown, A>
//state type
export type AppStateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    app: appReducer,
    packs:packsReducer,
    cards: cardsReducer,
    //newPassword: setNewPasswordReducer
});


export let store = createStore(reducers, applyMiddleware(thunk));
// @ts-ignore
window.store = store