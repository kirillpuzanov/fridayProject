import React from 'react';
import {MyInput} from '../../common/myComponent/myInput/MyInput';
import {MyBtn} from '../../common/myComponent/myBtn/MyBtn';
import style from './Registration.module.css';
import {FormikErrorType} from './RegistrationContainer';
import {Snackbar} from '@material/react-snackbar';
import  '@material/react-snackbar/dist/snackbar.css';

type RegistrationType = {
    email: string
    password: string
    repeatPass: string
    error: string
    errors: FormikErrorType
    formSubmit: () => void
    onChange: (e: string | React.ChangeEvent<HTMLInputElement>) => void
}

export const Registration: React.FC<RegistrationType> = (props) => {

    const {email, password, repeatPass, error:errorServer, errors, onChange, formSubmit} = props;
    const {email: errorEmail, password: errorPassword, repeatPass: errorRepeatPass} = errors;
    const disBtn = errorEmail || errorPassword || errorRepeatPass;



    return <section>
        <main className={style.reg}>
            <div className={style.reg_title}> Registration form</div>
            <form className={style.reg_form}>
                <div>
                    <span>Enter your email:</span>
                    <MyInput error={!!errorEmail} type='email'
                             value={email} onChange={onChange}
                             placeholder='email...' name='email'/>
                    {errorEmail ?
                        <div className={style.reg_form__error}>{errorEmail}</div> : null}
                </div>
                <div>
                    <span>Enter your password:</span>
                    <MyInput error={!!errorPassword} type='password'
                             value={password} onChange={onChange}
                             placeholder='min 8 symbols..' name='password'/>
                    {errorPassword ?
                        <div className={style.reg_form__error}>{errors.password}</div> : null}
                </div>
                <div>
                    <span>Repeat your password:</span>
                    <MyInput error={!!errorRepeatPass} type='password'
                             value={repeatPass} onChange={onChange}
                             placeholder='min 8 symbols...' name='repeatPass'/>
                    {errorRepeatPass ?
                        <div className={style.reg_form__error}>{errors.repeatPass}</div> : null}
                </div>
                {errorServer ? <p className={style.reg_form__error}> {errorServer} </p> : ''}
                <div>
                    <MyBtn error={!!disBtn} disabled={!!disBtn} name={'Register'} onClick={formSubmit}/>
                </div>
                {/*{error && <Snackbar message={error} timeoutMs={4000}/>}*/}
            </form>
        </main>
    </section>
}


// type RegistrationType = {
//     email: string
//     password: string
//     repeatPass: string
//     error: string
//     errors: FormikErrorType
//     loading: boolean
//     formSubmit: () => void
//     onChange: (e: string | React.ChangeEvent<HTMLInputElement>) => void
//     // errorEmail: boolean | string | undefined
//     // errorPassword: boolean | string | undefined
//     // errorRepeatPass: boolean | string | undefined
//     // setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
//     // setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
//     // setRepeatPassword: (e: React.ChangeEvent<HTMLInputElement>) => void
// }


//old method
// export const Registration: React.FC<RegistrationType> = (props) => {
//     const {email, password, repeatPass, error,errors, loading,onChange, /*setEmail, setPassword, setRepeatPassword,*/ formSubmit} = props;
//
//     if (loading) return <Preloader/>
//
//     return <section>
//         <main className={style.reg}>
//             <div className={style.reg_title}> Registration form</div>
//             <form className={style.reg_form}>
//                 <div>
//                     <span>Enter your email:</span>
//                     <MyInput error={!!error} type='email'
//                              value={email} onChange={onChange}
//                              placeholder='email...' name='email'/>
//                 </div>
//                 <div>
//                     <span>Enter your password:</span>
//                     <MyInput error={!!error} type='password'
//                              value={password} onChange={onChange}
//                              placeholder='min 8 symbols..' name='password'/>
//                 </div>
//                 <div>
//                     <span>Repeat your password:</span>
//                     <MyInput error={!!error} type='password'
//                              value={repeatPass} onChange={onChange}
//                              placeholder='min 8 symbols...' name='repeatPassword'/>
//                 </div>
//                 {error ? <p className={style.reg_form__error}> {error} </p> : ''}
//                 <div>
//                     <MyBtn disabled={loading} name={'Login'} onClick={formSubmit}/>
//                 </div>
//             </form>
//         </main>
//     </section>
// }