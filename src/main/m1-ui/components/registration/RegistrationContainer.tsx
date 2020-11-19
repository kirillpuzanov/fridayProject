import React from 'react';
import {Registration} from './Registration';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {PROFILE_PATH, SIGN_IN_PATH} from '../routes/Routes';
import {useFormik} from 'formik';
import {AuthInitialStateType, registerTC} from '../../../m2-bll/auth-reducer';

export const RegistrationContainer = () => {
    const {error, registerSuccess} = useSelector<AppStateType, AuthInitialStateType>(state => state.auth);
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPass: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be more than 8 characters...';
            } else if (values.password !== values.repeatPass) {
                errors.repeatPass = 'Passwords do not match';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(registerTC(values.email, values.password));
        },
    });

    if (registerSuccess) return <Redirect to={SIGN_IN_PATH}/>;
    if (isAuth) return <Redirect to={PROFILE_PATH}/>;
    return (
        <Registration
            email={formik.values.email}
            password={formik.values.password}
            repeatPass={formik.values.repeatPass}
            error={error}
            errors={formik.errors}
            onChange={formik.handleChange}
            formSubmit={formik.handleSubmit}
        />
    );
};

export type FormikErrorType = {
    email?: string
    password?: string
    repeatPass?: string
    confirm?: string


}

//old method

// export type eInput = React.ChangeEvent<HTMLInputElement>
//
// export const RegistrationContainer: React.FC = () => {
//
//     const [email, setEmailVal] = useState<string>('')
//     const [password, setPasswordVal] = useState('')
//     const [repeatPass, setRepeatPassVal] = useState('')
//
//      const {loading, error, registerSuccess} = useSelector<AppStateType, initialStateType>(state => state.registration)
//     const dispatch = useDispatch()
//
//     const setEmail = useCallback((e: eInput) => {
//         setEmailVal(e.currentTarget.value)
//     }, [setEmailVal])
//     const setPassword = useCallback((e: eInput) => {
//         setPasswordVal(e.currentTarget.value)
//     }, [setPasswordVal])
//     const setRepeatPassword = useCallback((e: eInput) => {
//         setRepeatPassVal(e.currentTarget.value)
//     }, [setRepeatPassVal])
//
//     const formSubmit = useCallback(() => {
//         if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
//             dispatch(signInActions.setError('Uncorrected email'))
//         } else if (password.length < 8) {
//             dispatch(signInActions.setError('Password must be more than 8 characters...'))
//         } else if (password !== repeatPass) {
//             dispatch(signInActions.setError('Invalid second password'))
//         } else if (email && password && repeatPass) {
//             dispatch(registerTC(email, password))
//         }
//     }, [password, repeatPass, email, dispatch])
//
//     if (registerSuccess) return <Redirect to={SIGN_IN_PATH}/>
//     return <section>
//         <Registration
//             email={email}
//             password={password}
//             repeatPass={repeatPass}
//             error={error}
//             loading={loading}
//             setEmail={setEmail}
//             setPassword={setPassword}
//             setRepeatPassword={setRepeatPassword}
//             formSubmit={formSubmit}
//         />
//     </section>
// }