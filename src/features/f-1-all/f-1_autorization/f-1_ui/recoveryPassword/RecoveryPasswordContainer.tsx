import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../../main/m2-bll/store';
import {AuthInitialStateType, recoveryPassTC} from '../../f-1_bll/auth-reducer';
import {useFormik} from 'formik';
import {RecoveryPassword} from './RecoveryPassword';
import {Redirect} from 'react-router-dom';
import {PROFILE_PATH} from '../../../../../main/m1-ui/routes/Routes';


export const RecoveryPasswordContainer: React.FC = () => {

    const {recoveryPassSuccess,isAuth} = useSelector<AppStateType, AuthInitialStateType>(state => state.auth)
    const serverError = useSelector<AppStateType, string>(state => state.app.serverError);
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors: RecoveryPassErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: (values) => {
            const RecoveryPassObj: RecoveryPassObjType = {
                email: values.email,
                from: 'kirillpuzanov@mail.ru',
                message: `<div style="background-color: lime; padding: 15px">
                        password recovery link: 
	                    <a href='http://localhost:3000/#/new-pass/$token$'>link</a>
	                    </div>`
            }
            dispatch(recoveryPassTC(RecoveryPassObj))
            console.log(RecoveryPassObj)
        },
    })

    if (isAuth) return <Redirect to={PROFILE_PATH}/>;
    return <section>
        <div>
            <RecoveryPassword
                email={formik.values.email}
                onChange={formik.handleChange}
                formSubmit={formik.handleSubmit}
                errors={formik.errors}
                serverError={serverError}
                recoveryPassSuccess={recoveryPassSuccess}
            />
        </div>
    </section>
}
export type RecoveryPassErrorType = {
    email?: string
}
export type RecoveryPassObjType = {
    email: string
    from: string
    message: any
}

