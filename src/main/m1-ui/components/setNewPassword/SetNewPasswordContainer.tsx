import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../m2-bll/store';
import {useFormik} from 'formik';
import {SetNewPassword} from './SetNewPassword';
import {AuthInitialStateType, setNewPassTC} from '../../../m2-bll/auth-reducer';
import {Redirect, useParams} from 'react-router-dom';
import {PROFILE_PATH, SIGN_IN_PATH} from '../routes/Routes';

export const SetNewPasswordContainer: React.FC = () => {

    const {error,newPassSuccess,isAuth} = useSelector<AppStateType, AuthInitialStateType>(state => state.auth);
    const dispatch = useDispatch();
    const {token} = useParams<tokenType>();

    const formik = useFormik({
        initialValues: {
            password: '',
            repeatPass: '',
        },
        validate: (values) => {
            const errors: SetNewPassErrorType = {};
            if (values.password.length < 8) {
                errors.password = 'Password must be more than 8 characters...';
            } else if (values.password !== values.repeatPass) {
                errors.repeatPass = 'Passwords do not match';
            }
            return errors;
        },
        onSubmit: (values) => {
           const setNewPassData:setNewPassDatatype = {
               password:values.password,
               resetPasswordToken: token
           }
            dispatch(setNewPassTC(setNewPassData))
            console.log(token)
        },
    })

    if (newPassSuccess) return <Redirect to={SIGN_IN_PATH}/>
    if (isAuth) return <Redirect to={PROFILE_PATH}/>;
    return <section>
        <div>
            <SetNewPassword
                password={formik.values.password}
                repeatPass={formik.values.repeatPass}
                error={error}
                errors={formik.errors}
                onChange={formik.handleChange}
                formSubmit={formik.handleSubmit}
            />
        </div>
    </section>
}
export type setNewPassDatatype = {
    password:string
    resetPasswordToken:string
}
export type SetNewPassErrorType = {
    password?: string,
    repeatPass?: string,
}
type tokenType = {token:string}

