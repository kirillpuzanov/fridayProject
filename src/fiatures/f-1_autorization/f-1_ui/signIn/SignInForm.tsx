import React from 'react';
import st from './SingInForm.module.css';
import {NavLink} from 'react-router-dom';
import {RECOVERY_PASSWORD_PATH, REGISTRATION_PATH} from '../../../../main/m1-ui/routes/Routes';
import style from '../../../../main/m1-ui/header/Header.module.css';
import {FormikErrorType} from '../registration/RegistrationContainer';
import {MyInput} from '../../../../main/common/myComponent/myInput/MyInput';
import {MyBtn} from '../../../../main/common/myComponent/myBtn/MyBtn';

type PropsType = {
    email: string
    password: string
    onChange: (e: string | React.ChangeEvent<HTMLInputElement>) => void
    title: string
    formSubmit: () => void
    errors: FormikErrorType
}


export const SignInForm: React.FC<PropsType> = (props) => {

    const {email, password, errors, onChange, formSubmit, title} = props;
    const {email: errorEmail, password: errorPassword, confirm: errorConfirm} = errors;
    const disableErrorField = errorEmail || errorPassword;

    return <div>
        <div className={st.title}>{title}</div>
        <MyInput type='email'
                     onChange={onChange}
                     value={email}
                     placeholder={'email'}
                     name={'email'}
                     error={!!errorEmail}
        /> {errorEmail ?
        <div className={st.has_error}>{errorEmail}</div> : null}

        {errorConfirm ? <div className={st.has_error}>{errorConfirm}</div> : null}

        <MyInput type='password'
                     onChange={onChange}
                     value={password}
                     placeholder={'password'}
                     error={!!errorPassword} name={'password'}
        />
        {errorPassword ?
            <div className={st.has_error}>{errorPassword}</div> : null}

        <div className={st.click}>
            <div>
                <input type='checkbox' onChange={onChange}/>RememberMe
            </div>
            {!disableErrorField ? <MyBtn name='Login'
                                             type="submit"
                                             onClick={formSubmit}
                                             disabled={!!disableErrorField}
                                             error={!!disableErrorField}
            /> : null}

        </div>
        <div className={st.footer}>
            <nav>
                <NavLink to={REGISTRATION_PATH} activeClassName={style.header_nav__link}>SingUp</NavLink>
            </nav>
            <nav>
                <NavLink to={RECOVERY_PASSWORD_PATH} activeClassName={style.header_nav__link}>Forgot?</NavLink>
            </nav>
        </div>


    </div>;
};