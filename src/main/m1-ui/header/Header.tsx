import React from 'react';
import {NavLink} from 'react-router-dom';
import {PACKS_PATH, PROFILE_PATH, SIGN_IN_PATH} from '../routes/Routes';
import style from './Header.module.css';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../m2-bll/store';

export const Header = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    return <section className={style.header}>
        <nav className={style.header_nav}>
            {!isAuth && <NavLink to={SIGN_IN_PATH} exact activeClassName={style.header_nav__link}>Sign In</NavLink>}
            {isAuth && <NavLink to={PROFILE_PATH} activeClassName={style.header_nav__link}>Profile</NavLink>}
            {isAuth && <NavLink to={PACKS_PATH} activeClassName={style.header_nav__link}>Packs</NavLink>}
        </nav>
    </section>;
};



