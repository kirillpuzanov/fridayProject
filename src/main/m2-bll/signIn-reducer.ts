import {BaseThunkType, InferActionsTypes} from './store';

//actions
const signInActions = {
    testAC: (test1:any) => ({type: 'TEST',test1} as const),
}

//thunk's
export const testThunk = (test1:any):ThunkType => (dispatch) => {
   dispatch(signInActions.testAC(test1))
}



const initialState = {
    test: 'test123'
}
export const signInReducer = (state: initialStateType = initialState, action: SignInActionsType):initialStateType => {
    switch (action.type) {
        case 'TEST':


        default:
            return state
    }
}


type initialStateType = typeof initialState
type ThunkType = BaseThunkType<SignInActionsType>
type SignInActionsType = InferActionsTypes<typeof signInActions>

