import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../m2-bll/store';
import {useFormik} from 'formik';
import {Redirect} from 'react-router-dom';
import st from './SingInForm.module.css';
import {SingInTC} from '../../../m2-bll/signIn-reducer';
import {SignInForm} from './SignInForm';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const SignIn: React.FC<any> = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.signIn.isLoggedIn);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 7) {
                errors.password = 'Must be more than 7 characters';
            }
            return errors;
        },
        onSubmit: values => {
            alert('Login operation is successful ');
            dispatch(SingInTC(values));
        },
    });
    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>;
    }
    const hasEmailFieldError = !!formik.errors.email;
    const hasPasswordFieldError = !!formik.errors.password;

    return <div className={st.wrapper}>
        <form onSubmit={formik.handleSubmit}>
            <SignInForm
                title={'LOGIN FORM'}
                onChange={formik.handleChange}
                onClick={formik.handleSubmit}
                emailValue={formik.values.email}
                formikEmailError={formik.errors.email}
                formikPassError={formik.errors.password}
                passValue={formik.values.password}
                hasEmailFieldError={hasEmailFieldError}
                hasPasswordFieldError={hasPasswordFieldError}
                checked={formik.values.rememberMe}
            />
        </form>
    </div>;
};