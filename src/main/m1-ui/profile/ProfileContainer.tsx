import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {SIGN_IN_PATH} from '../routes/Routes';
import {Profile} from './Profile';
import {ProfileType} from '../../../fiatures/f-1_autorization/f-1_dal/authAPI';
import {logoutTC} from '../../../fiatures/f-1_autorization/f-1_bll/auth-reducer';

export const ProfileContainer: React.FC = () => {

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);
    const profile = useSelector<AppStateType, ProfileType>(state => state.profile.profile);
    const dispatch = useDispatch();

    const onLogOut = () => dispatch(logoutTC())

    if (!isAuth) return <Redirect to={SIGN_IN_PATH}/>

    return <section>
        <Profile
            profile={profile}
            onLogOut={onLogOut}
        />
    </section>
}