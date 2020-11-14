import React from 'react';
import { Route } from 'react-router-dom';
import {SignIn} from '../signIn/SignIn';
import {Registration} from '../registration/Registration';
import {Profile} from '../profile/Profile';
import {PNF} from '../notFound/PNF';
import {RecoveryPassword} from '../recoveryPassword/RecoveryPassword';
import {SetNewPassword} from '../setNewPassword/SetNewPassword';
import {TestComponent} from '../TestComponent/MyComponent';
import {SignInContainer} from '../signIn/SingInContainer';

export const SIGN_IN_PATH = '/signIn';
export const REGISTRATION_PATH = '/registration';
export const PROFILE_PATH = '/profile';
export const PAGE_NOT_FOUND_PATH = '/404';
export const RECOVERY_PASSWORD_PATH = '/recovery-pass';
export const SET_NEW_PASSWORD_PATH = '/new-pass';
export const TEST_COMPONENT_PATH = '/test-component';


export const Routes: React.FC = () => {

    return <>
            {/*SignIn*/}
            <Route path={SIGN_IN_PATH} component={SignInContainer}/>
            <Route path={REGISTRATION_PATH} component={Registration}/>
            <Route path={PROFILE_PATH} component={Profile}/>
            <Route path={PAGE_NOT_FOUND_PATH} component={PNF}/>
            <Route path={RECOVERY_PASSWORD_PATH} component={RecoveryPassword}/>
            <Route path={SET_NEW_PASSWORD_PATH} component={SetNewPassword}/>
            <Route path={TEST_COMPONENT_PATH} component={TestComponent}/>
    </>
}