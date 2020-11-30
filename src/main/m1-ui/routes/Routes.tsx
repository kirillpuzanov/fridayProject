import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {PNF} from '../notFound/PNF';
import {ProfileContainer} from '../profile/ProfileContainer';
import {SignIn} from '../../../features/f-1-all/f-1_autorization/f-1_ui/signIn/SingIn';
import {RegistrationContainer} from '../../../features/f-1-all/f-1_autorization/f-1_ui/registration/RegistrationContainer';
import {RecoveryPasswordContainer} from '../../../features/f-1-all/f-1_autorization/f-1_ui/recoveryPassword/RecoveryPasswordContainer';
import {SetNewPasswordContainer} from '../../../features/f-1-all/f-1_autorization/f-1_ui/setNewPassword/SetNewPasswordContainer';
import {PacksPage} from '../../../features/f-1-all/f-2_PacksTable/f-2_ui/PacksPage';
import Sandbox from '../../../features/f-2-modal/test/modal/Sandbox';
import {LearnPage} from '../../../features/f-3-learn/LearnPage';
import {CardsPage} from '../../../features/f-1-all/f-3_CardsTable/c1-ui/CardsPage';


export const SIGN_IN_PATH = '/';
export const REGISTRATION_PATH = '/registration';
export const PROFILE_PATH = '/profile';
export const PAGE_NOT_FOUND_PATH = '/404';
export const RECOVERY_PASSWORD_PATH = '/recoveryPass';
export const SET_NEW_PASSWORD_PATH = '/new-pass/:token?';
export const PACKS_PATH = '/packs';
export const TEST_COMPONENT_PATH = '/test';
export const CARDS_PATH = '/cards';
export const LEARN_PATH = '/learn';
export const SAND = '/sandbox';

export const Routes: React.FC<any> = () => {

    return <>
        <Switch>
            <Route exact path={SIGN_IN_PATH} component={SignIn}/>
            <Route path={REGISTRATION_PATH} component={RegistrationContainer}/>
            <Route path={PROFILE_PATH} component={ProfileContainer}/>
            <Route path={RECOVERY_PASSWORD_PATH} component={RecoveryPasswordContainer}/>
            <Route path={SET_NEW_PASSWORD_PATH} component={SetNewPasswordContainer}/>
            <Route path={PACKS_PATH} component={PacksPage}/>
            <Route path={PAGE_NOT_FOUND_PATH} component={PNF}/>
            <Route path={CARDS_PATH + '/:id?'} component={CardsPage}/>
            <Route path={LEARN_PATH + '/:id?'} component={LearnPage}/>
            <Route path={SAND} component={Sandbox}/>

            <Redirect from={'*'} to={PAGE_NOT_FOUND_PATH}/>
        </Switch>

    </>
}
