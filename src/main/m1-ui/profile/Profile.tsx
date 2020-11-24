import React from 'react';
import {ProfileType} from '../../../fiatures/f-1_autorization/f-1_dal/authAPI';
import style from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo';
import {MyBtn} from '../../common/myComponent/myBtn/MyBtn';

type ProfType = {
    profile: ProfileType
    onLogOut: ()=> void
}

export const Profile: React.FC<ProfType> = (props) => {
    const {profile,onLogOut} = props;
    return <section>
        <div className={style.profile}>
            <ProfileInfo profile={profile}/>
            <MyBtn name={'LogOut'} onClick={onLogOut}/>
        </div>
    </section>
}







