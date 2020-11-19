import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../m2-bll/store';
import {useFormik} from 'formik';
import {SetNewPassword} from './SetNewPassword';
import {AuthInitialStateType} from '../../../m2-bll/auth-reducer';
import {Redirect} from 'react-router-dom';
import {SIGN_IN_PATH} from '../routes/Routes';


export const SetNewPasswordContainer: React.FC = () => {

    const {error,setNewPassSuccess} = useSelector<AppStateType, AuthInitialStateType>(state => state.auth);
    const dispatch = useDispatch()

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
           const setNewPassData = {
               password:values.password,
               resetPasswordToken: ''
           }
            // dispatch(setNewPassTC(setNewPassData))
            console.log(setNewPassData)
        },
    })

    if (setNewPassSuccess) return <Redirect to={SIGN_IN_PATH}/>

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
export type RecoveryPassErrorType = {
    email?: string

}
export type SetNewPassErrorType = {
    password?: string,
    repeatPass?: string,
}

