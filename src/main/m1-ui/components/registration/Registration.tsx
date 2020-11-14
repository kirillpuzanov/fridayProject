import React from 'react';
import {MyInput} from '../../common/myComponent/myInput/MyInput';
import {MyBtn} from '../../common/myComponent/myBtn/MyBtn';
import style from './Registration.module.css';
import {Preloader} from '../../common/Preloader/Preloader';

type RegistrationType = {
    email: string
    password: string
    repeatPass: string
    error: string
    loading: boolean
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
    setRepeatPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
    formSubmit: () => void
}

export const Registration: React.FC<RegistrationType> = (props) => {
    const {email, password, repeatPass, error, loading, setEmail, setPassword, setRepeatPassword, formSubmit} = props;

    if(loading) return <Preloader/>

    return <section>
        <main className={style.reg}>
            <div className={style.reg_title}> Registration form</div>
            <form className={style.reg_form}>
                <div>
                    <span>Enter your email:</span>
                    <MyInput error={!!error} type='email'
                             value={email} onChange={setEmail}
                             placeholder='email...'/>
                </div>
                <div>
                    <span>Enter your password:</span>
                    <MyInput error={!!error} type='password'
                             value={password} onChange={setPassword}
                             placeholder='min 8 symbols..'/>
                </div>
                <div>
                    <span>Repeat your password:</span>
                    <MyInput error={!!error} type='password'
                             value={repeatPass} onChange={setRepeatPassword}
                             placeholder='min 8 symbols...'/>
                </div>
                {error ? <p className={style.reg_form__error}> {error} </p> : ''}
                <div>
                    <MyBtn disabled={loading} name={'Login'} onClick={formSubmit}/>
                </div>
            </form>
        </main>
    </section>
}