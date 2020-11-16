import React from 'react';
import {Route} from 'react-router-dom';
import {Profile} from '../profile/Profile';
import {PNF} from '../notFound/PNF';
import {RecoveryPassword} from '../recoveryPassword/RecoveryPassword';
import {SetNewPassword} from '../setNewPassword/SetNewPassword';
import {RefFormik} from '../registration/RegistrationContainer';
import {SignIn} from '../signIn/SingIn';


export const SIGN_IN_PATH = '/';
export const REGISTRATION_PATH = '/registration';
export const PROFILE_PATH = '/profile';
export const PAGE_NOT_FOUND_PATH = '/404';
export const RECOVERY_PASSWORD_PATH = '/recoveryPass';
export const SET_NEW_PASSWORD_PATH = '/new-pass';
export const TEST_COMPONENT_PATH = '/testComponent';


export const Routes: React.FC<any> = () => {

    return <>
            <Route exact path={SIGN_IN_PATH} component={SignIn}/>
            <Route exact path={REGISTRATION_PATH} component={RefFormik}/>
            <Route exact path={PROFILE_PATH} component={Profile}/>
            <Route exact path={PAGE_NOT_FOUND_PATH} component={PNF}/>
            <Route exact path={RECOVERY_PASSWORD_PATH} component={RecoveryPassword}/>
            <Route exact path={SET_NEW_PASSWORD_PATH} component={SetNewPassword}/>
    </>
}
