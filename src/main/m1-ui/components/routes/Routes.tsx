import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {PNF} from '../notFound/PNF';
import {RegistrationContainer} from '../registration/RegistrationContainer';
import {SignIn} from '../signIn/SingIn';
import {ProfileContainer} from '../profile/ProfileContainer';
import {RecoveryPasswordContainer} from '../authorization/recoveryPassword/RecoveryPasswordContainer';
import {SetNewPasswordContainer} from '../authorization/setNewPassword/SetNewPasswordContainer';
import {Packs} from '../tablePacks/Packs';


export const SIGN_IN_PATH = '/';
export const REGISTRATION_PATH = '/registration';
export const PROFILE_PATH = '/profile';
export const PAGE_NOT_FOUND_PATH = '/404';
export const RECOVERY_PASSWORD_PATH = '/recoveryPass';
export const SET_NEW_PASSWORD_PATH = '/new-pass/:token?';
export const TEST_COMPONENT_PATH = '/testComponent';
export const PACKS_PAGE = '/pack-page'
export const PACKS_PATH = '/packs';


export const Routes: React.FC<any> = () => {

    return <>
        <Switch>
            <Route exact path={SIGN_IN_PATH} component={SignIn}/>
            <Route path={REGISTRATION_PATH} component={RegistrationContainer}/>
            <Route path={PROFILE_PATH} component={ProfileContainer}/>
            <Route path={RECOVERY_PASSWORD_PATH} component={RecoveryPasswordContainer}/>
            <Route path={SET_NEW_PASSWORD_PATH} component={SetNewPasswordContainer}/>
            <Route path={PACKS_PATH} component={Packs}/>
            <Route path={PAGE_NOT_FOUND_PATH} component={PNF}/>
            <Route path={TEST_COMPONENT_PATH} component={TestComponent}/>
            <Route path={PACKS_PAGE} component={PacksPage}/>
            <Redirect from={'*'} to={PAGE_NOT_FOUND_PATH}/>
        </Switch>

    </>
}
