import {Dispatch} from "redux";

const CHECK_OLD_PASSWORD = 'CHECK_OLD_PASSWORD'
const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

type CheckOldPasswordType = {
    type: 'CHECK_OLD_PASSWORD',
    value: string
}

type ChangeNewPasswordType = {
    type: 'CHANGE_PASSWORD',
    value: string
}

type SetNewPasswordActionTypes = CheckOldPasswordType | ChangeNewPasswordType



//type InitialStateType = ReturnType<typeof initialState>
type InitialStateType = {
    oldPassword: string,
    newPassword: string
}


let initialState = {
    oldPassword: '123',
    newPassword: ''
}

export const setNewPasswordReducer = (state: InitialStateType = initialState, action: SetNewPasswordActionTypes) => {
    switch (action.type) {
        case CHECK_OLD_PASSWORD: {
            return {

            }
        }
    }
}

export const checkOldPasswordAC = (value: string) => ({type: CHECK_OLD_PASSWORD, value})
export const changePasswordAC = (value: string) => ({type: CHANGE_PASSWORD, value})

