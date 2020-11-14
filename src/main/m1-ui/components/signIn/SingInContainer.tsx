import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../m2-bll/store';
import {useFormik} from 'formik';
import {Redirect} from 'react-router-dom';
import st from './SingInContainer.module.css';
import {MyBtn} from '../../common/myComponent/myBtn/MyBtn';
import {MyInputTest} from '../../common/myComponent/myInput/MyInputTest';
import {SingInTC} from '../../../m2-bll/signIn-reducer';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const SignInContainer: React.FC<any> = () => {
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
            alert(JSON.stringify(values));
             dispatch(SingInTC(values));
        },
    });

    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>;
    }

    const hasEmailFieldError = !!formik.errors.email;
    const hasPasswordFieldError = !!formik.errors.password;

    return <div className={st.wrapper}>
        <div className={st.title}>LOGIN FORM</div>

        <form onSubmit={formik.handleSubmit}>

            <MyInputTest type='email' onChange={formik.handleChange} value={formik.values.email}
                         placeholder={'email'}
                         name={'email'}
                         error={hasEmailFieldError}
            /> {formik.errors.email ? <div className={st.has_error}>{formik.errors.email}</div> : null}


            <MyInputTest type='password' onChange={formik.handleChange} value={formik.values.password}
                         placeholder={'password'}
                         error={hasPasswordFieldError} name={'password'}
            />{formik.errors.password ? <div className={st.has_error}>{formik.errors.password}</div> : null}

            <div className={st.click}>
                <div>
                    <input type='checkbox' {...formik.getFieldProps('rememberMe')}/>RememberMe
                </div>


                <MyBtn name={'Login'} error={hasEmailFieldError || hasPasswordFieldError} type={'submit'}
                       disabled={hasEmailFieldError || hasPasswordFieldError}/>

            </div>

            {/*<SignIn title={'SING IN'} value ={formik.values.email} name={'email'} onChange={formik.handleChange}*/}
            {/*        onSubmit={formik.handleSubmit}/>*/}

        </form>
    </div>;
};