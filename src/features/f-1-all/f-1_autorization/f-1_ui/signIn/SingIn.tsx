import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../../main/m2-bll/store';
import {useFormik} from 'formik';
import st from './SingInForm.module.css';
import {SignInForm} from './SignInForm';
import {Redirect} from 'react-router-dom';
import {PROFILE_PATH} from '../../../../../main/m1-ui/routes/Routes';
import {SingInTC} from '../../f-1_bll/auth-reducer';
import {FormikErrorType} from '../registration/RegistrationContainer';


export const SignIn: React.FC<any> = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            confirm: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Must be more than 8 characters';
            }
            if (values.confirm) {
                errors.confirm = 'Incorrect email or password';
            }
            return errors;
        },

        onSubmit: async (values, formikHelpers) => {
            const action = await dispatch(SingInTC(values));
            formikHelpers.setFieldError('confirm', 'Incorrect email or password');
            console.log(JSON.stringify(action) + 'novoe');
        },
    });


    if (isAuth) return <Redirect to={PROFILE_PATH}/>;

    return <div className={st.wrapper}>
        <form onSubmit={formik.handleSubmit}>
            <SignInForm
                title={'LOGIN FORM'}
                onChange={formik.handleChange}
                formSubmit={formik.handleSubmit}
                email={formik.values.email}
                password={formik.values.password}
                errors={formik.errors}

            />
        </form>

    </div>;
};

// export type FormikErrorType = {
//     email?: string
//     password?: string
//     // rememberMe?: boolean
//     confirm?: string
// }
