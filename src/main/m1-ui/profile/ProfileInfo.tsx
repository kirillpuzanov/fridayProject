import {ProfileType} from '../../../features/f-1-all/f-1_autorization/f-1_dal/authAPI';
import ava_default from '../../assets/img/ava_default.jpg';
import React from 'react';

type ProfileInfoType = {
    profile: ProfileType
}
export const ProfileInfo = (props: ProfileInfoType) => {
    const {profile} = props;
    return (
        <div>
            <div><img src={profile.avatar ? profile.avatar : ava_default} alt=""/></div>
            <div>Name : {profile.name}</div>
            <div>Email : {profile.email}</div>
            <div>Public Card Packs Count : {profile.publicCardPacksCount}</div>
            <nav>
                {/*<NavLink to={PACKS_PAGE} activeClassName={style.header_nav__link}>PacksPage</NavLink>*/}
            </nav>
        </div>
    );
};