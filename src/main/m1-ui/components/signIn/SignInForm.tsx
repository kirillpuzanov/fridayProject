import React from 'react';
import st from './SingInForm.module.css';
import {MyInputTest} from '../../common/myComponent/myInput/MyInputTest';
import {MyBtn} from '../../common/myComponent/myBtn/MyBtn';

type PropsType = {
    onChange: (e: string | React.ChangeEvent<any>) => void
    title: string
    emailValue: string
    hasEmailFieldError: boolean
    formikEmailError: string | undefined
    passValue: string
    hasPasswordFieldError: boolean
    formikPassError: string | undefined
    checked: boolean
    onClick: () => void
    PasswordEmailConfirmed: string | undefined
}

export const SignInForm: React.FC<PropsType> = (props) => {
    return <div>
        <div className={st.title}>{props.title}</div>
        <MyInputTest type='email'
                     onChange={props.onChange}
                     value={props.emailValue}
                     placeholder={'email'}
                     name={'email'}
                     error={props.hasEmailFieldError}/> {props.formikEmailError ?
        <div className={st.has_error}>{props.formikEmailError}</div> : null}
        <MyInputTest type='password'
                     onChange={props.onChange}
                     value={props.passValue}
                     placeholder={'password'}
                     error={props.hasPasswordFieldError} name={'password'}/>
                     {props.formikPassError ?
        <div className={st.has_error}>{props.formikPassError}</div> : null}
        {
           props.PasswordEmailConfirmed ? <div className={st.has_error}>{props.PasswordEmailConfirmed}</div> : null
        }
        <div className={st.click}>
            <div>
                <input type='checkbox' checked={props.checked} onChange={props.onChange}/>RememberMe
            </div>
            <MyBtn name={'Login'} type="submit" onClick={props.onClick}/>
        </div>
    </div>;
};