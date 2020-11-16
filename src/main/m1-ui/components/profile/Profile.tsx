import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {SIGN_IN_PATH} from '../routes/Routes';

export const Profile: React.FC = () => {

    const isAuth = useSelector<AppStateType, boolean>(state => state.signIn.isAuth);
    if (!isAuth) return <Redirect to={SIGN_IN_PATH}/>
    return <section>
        Profile
    </section>
}