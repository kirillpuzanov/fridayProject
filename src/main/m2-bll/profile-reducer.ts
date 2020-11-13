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
export const profileReducer = (state: initialStateType = initialState, action: ProfileActionsType):initialStateType => {
    switch (action.type) {
        case 'TEST':


        default:
            return state
    }
}


type initialStateType = typeof initialState
type ThunkType = BaseThunkType<ProfileActionsType>
type ProfileActionsType = InferActionsTypes<typeof signInActions>

