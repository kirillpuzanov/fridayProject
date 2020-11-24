import React from 'react';
import style from './RecoveryPass.module.css'
import {MyInput} from '../../../../main/common/myComponent/myInput/MyInput';
import {MyBtn} from '../../../../main/common/myComponent/myBtn/MyBtn';
import {FormikErrorType} from '../registration/RegistrationContainer';
import {Snackbar} from '@material/react-snackbar';

type RecPasstype = {
    onChange: (e: string | React.ChangeEvent<HTMLInputElement>) => void
    formSubmit: () => void
    errors: FormikErrorType
    email: string
    error: string
    recoveryPassSuccess: boolean
}

export const RecoveryPassword: React.FC<RecPasstype> = (props) => {

    const {onChange, formSubmit, errors, email, error: errorServer, recoveryPassSuccess} = props;
    const {email: errorEmail} = errors;
    return <section>
        <div className={style.recPass}>
            <h2 className={style.recPass_title}> RecoveryPassword </h2>
            <p className={style.recPass_description}>
                Для восстановления пароля введите ваш email,
                на него придет письмо с дальнейшими инструкциями.
            </p>
            <form className={style.recPass_form}>
                <MyInput type='email' onChange={onChange} name={'email'}
                         value={email} placeholder='your email...' error={!!errorEmail}/>
                {errorEmail ?
                    <div>{errorEmail}</div> : null}
                {recoveryPassSuccess ?
                    <div> Перейдите на почтовый ящик и следуйте дальнейщим инструкциям... </div> : null}

                <MyBtn name='Send' onClick={formSubmit}
                       error={!!errorEmail} disabled={!!errorEmail} type={'submit'}/>
                {errorServer ? <p className={style.reg_form__error}> {errorServer} </p> : ''}
                {/*{error && <Snackbar message={error} timeoutMs={4000}/>}*/}
            </form>
        </div>
    </section>
}