import React from 'react';
import {MyBtn} from '../../common/myComponent/myBtn/MyBtn';
import {MyInput} from '../../common/myComponent/myInput/MyInput';
import {SignIn} from '../signIn/SingIn';

export const TestComponent = () => {

    return (
        <section>
            <MyBtn name={'test'}
                   onClick={() => alert('hello')}/>
            <MyInput type={'input'} value={''}
                     onChange={() => console.log('hello')}/>
            <hr/>
            <SignIn/>
        </section>
    );
};