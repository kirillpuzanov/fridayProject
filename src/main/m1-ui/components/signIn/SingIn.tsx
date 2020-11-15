import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../m2-bll/store';
import {useFormik} from 'formik';
import {Redirect} from 'react-router-dom';
import st from './SingInForm.module.css';
import {SingInTC} from '../../../m2-bll/signIn-reducer';
import {SignInForm} from './SignInForm';


export const SignIn: React.FC<any> = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector<AppStateType, boolean>(state => state.signIn.isAuth);

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

    if (isAuth) {
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
                formikConfirmError={formik.errors.confirm}
                formikEmailError={formik.errors.email}
                formikPassError={formik.errors.password}
                passValue={formik.values.password}
                hasEmailFieldError={hasEmailFieldError}
                hasPasswordFieldError={hasPasswordFieldError}


            />
        </form>

    </div>;
};

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
    confirm?: string
}
