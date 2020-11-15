import React, {useCallback, useState} from 'react';
import {Registration} from './Registration';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../m2-bll/store';
import {initialStateType, registerTC, signInActions} from '../../../m2-bll/registration-reducer';
import {Redirect} from 'react-router-dom';
import {SIGN_IN_PATH} from '../routes/Routes';

export type eInput = React.ChangeEvent<HTMLInputElement>

export const RegistrationContainer: React.FC = () => {

    const [email, setEmailVal] = useState<string>('')
    const [password, setPasswordVal] = useState('')
    const [repeatPass, setRepeatPassVal] = useState('')

    const {loading, error, registerSuccess} = useSelector<AppStateType, initialStateType>(state => state.registration)
    const dispatch = useDispatch()

    const setEmail = useCallback((e: eInput) => {
        setEmailVal(e.currentTarget.value)
    }, [setEmailVal])
    const setPassword = useCallback((e: eInput) => {
        setPasswordVal(e.currentTarget.value)
    }, [setPasswordVal])
    const setRepeatPassword = useCallback((e: eInput) => {
        setRepeatPassVal(e.currentTarget.value)
    }, [setRepeatPassVal])

    const formSubmit = useCallback(() => {
        if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
            dispatch(signInActions.setError('Uncorrected email'))
        } else if (password.length < 7) {
            dispatch(signInActions.setError('Password must be more than 8 characters...'))
        } else if (password !== repeatPass) {
            dispatch(signInActions.setError('Invalid second password'))
        } else if (email && password && repeatPass) {
            dispatch(registerTC(email, password))
        }
    }, [password, repeatPass, email,dispatch])


    if (registerSuccess) return <Redirect to={SIGN_IN_PATH}/>
    return <section>
        <Registration
            email={email}
            password={password}
            repeatPass={repeatPass}
            error={error}
            loading={loading}
            setEmail={setEmail}
            setPassword={setPassword}
            setRepeatPassword={setRepeatPassword}
            formSubmit={formSubmit}
        />
    </section>
}

