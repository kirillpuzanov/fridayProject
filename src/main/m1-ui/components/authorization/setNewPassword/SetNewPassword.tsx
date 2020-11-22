import React from 'react';
import style from './SetNewPassword.module.css'
import {MyInput} from '../../../common/myComponent/myInput/MyInput';
import {MyBtn} from '../../../common/myComponent/myBtn/MyBtn';
import {SetNewPassErrorType} from './SetNewPasswordContainer';

type NewPassType = {
    onChange: (e: string | React.ChangeEvent<HTMLInputElement>) => void
    formSubmit: () => void
    errors: SetNewPassErrorType
    password: string
    repeatPass: string
    error: string
}

export const SetNewPassword: React.FC<NewPassType> = (props) => {
    const {onChange, formSubmit, errors, password, repeatPass} = props;
    const {password: errorPassword, repeatPass: errorRepeatPass} = errors;
    const disBtn = !!errorPassword || !!errorRepeatPass;

    return <section>
        <main className={style.newPass}>
            <form>
                <h2 className={style.newPass_title}> Смена пароля </h2>
                <div>
                    <p className={style.newPass_descr}> Введите ваш новый пароль.. </p>
                    <MyInput error={!!errorPassword} type='password'
                             value={password} onChange={onChange}
                             placeholder='min 8 symbols..' name='password'/>
                    {errorPassword
                        ? <div className={style.reg_form__error}>{errors.password}</div>
                        : null}
                </div>
                <div>
                    <p>Повторите ваш новый пароль..</p>
                    <MyInput error={!!errorRepeatPass} type='password'
                             value={repeatPass} onChange={onChange}
                             placeholder='min 8 symbols...' name='repeatPass'/>
                    {errorRepeatPass
                        ? <div className={style.reg_form__error}>{errors.repeatPass}</div>
                        : null}
                </div>
                <div>
                    <MyBtn name='Send' onClick={formSubmit}
                           error={disBtn} disabled={disBtn} type={'submit'}/>
                </div>
            </form>
        </main>
    </section>
}