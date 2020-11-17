import React from 'react';
import st from './SingInForm.module.css';
import {MyInputTest} from '../../common/myComponent/myInput/MyInputTest';
import {MyBtnTest} from '../../common/myComponent/myBtnTest/MyBtnTest';
import {NavLink} from 'react-router-dom';
import {RECOVERY_PASSWORD_PATH, REGISTRATION_PATH} from '../routes/Routes';
import style from '../header/Header.module.css';

type PropsType = {
    onChange: (e: string | React.ChangeEvent<HTMLInputElement>) => void
    title: string
    emailValue: string
    hasEmailFieldError: boolean
    formikEmailError: string | undefined
    passValue: string
    hasPasswordFieldError: boolean
    formikPassError: string | undefined
    onClick: () => void
    formikConfirmError: string | undefined

}


export const SignInForm: React.FC<PropsType> = (props) => {
    const disableErrorField = props.hasPasswordFieldError || props.hasEmailFieldError;
    return <div>
        <div className={st.title}>{props.title}</div>
        <MyInputTest type='email'
                     onChange={props.onChange}
                     value={props.emailValue}
                     placeholder={'email'}
                     name={'email'}
                     error={props.hasEmailFieldError}
        /> {props.formikEmailError ?
        <div className={st.has_error}>{props.formikEmailError}</div> : null}
        {props.formikConfirmError ? <div className={st.has_error}>{props.formikConfirmError}</div> : null}
        <MyInputTest type='password'
                     onChange={props.onChange}
                     value={props.passValue}
                     placeholder={'password'}
                     error={props.hasPasswordFieldError} name={'password'}
        />
        {props.formikPassError ?
            <div className={st.has_error}>{props.formikPassError}</div> : null}

        <div className={st.click}>
            <div>
                <input type='checkbox' onChange={props.onChange}/>RememberMe
            </div>
            {!disableErrorField ? <MyBtnTest name='Login'
                                             type="submit"
                                             onClick={props.onClick}
                                             disabled={disableErrorField}
                                             error={disableErrorField}
            /> : null}
            {/*<MyBtnTest name='Login'*/}
            {/*           type="submit"*/}
            {/*           onClick={props.onClick}*/}
            {/*           disabled={disableErrorField}*/}
            {/*           error={disableErrorField}*/}
            {/*/>*/}
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