import React from 'react';
import {NavLink} from 'react-router-dom';
import {
    CARDS_PATH,
    PACKS_PATH,
    PAGE_NOT_FOUND_PATH,
    PROFILE_PATH,
    RECOVERY_PASSWORD_PATH,
    REGISTRATION_PATH, SAND,
    SET_NEW_PASSWORD_PATH,
    SIGN_IN_PATH,
    TEST_COMPONENT_PATH
} from '../routes/Routes';
import style from './Header.module.css';

export type HeaderType = {}

export const Header = (props: HeaderType) => {

    return <section className={style.header}>
        <nav className={style.header_nav}>
            <NavLink to={SIGN_IN_PATH} exact activeClassName={style.header_nav__link}>Sign In</NavLink>
            <NavLink to={RECOVERY_PASSWORD_PATH} activeClassName={style.header_nav__link}>Recovery password</NavLink>
            <NavLink to={SET_NEW_PASSWORD_PATH} activeClassName={style.header_nav__link}>Set new Password</NavLink>
            <NavLink to={REGISTRATION_PATH} activeClassName={style.header_nav__link}>Registration</NavLink>
            <NavLink to={PROFILE_PATH} activeClassName={style.header_nav__link}>Profile</NavLink>
            <NavLink to={PAGE_NOT_FOUND_PATH} activeClassName={style.header_nav__link}>404</NavLink>
            <NavLink to={PACKS_PATH} activeClassName={style.header_nav__link}>Packs</NavLink>
            <NavLink to={CARDS_PATH} activeClassName={style.header_nav__link}>Cards</NavLink>
            <NavLink to={SAND} activeClassName={style.header_nav__link}>SandBox</NavLink>
        </nav>
    </section>;
};
