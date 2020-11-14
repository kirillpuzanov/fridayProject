import React from 'react';
import {MyBtn} from '../../common/myComponent/myBtn/MyBtn';
import {MyInput} from '../../common/myComponent/myInput/MyInput';
import {SignInContainer} from '../signIn/SingInContainer';

export const TestComponent = () => {

    return (
        <section>
            <MyBtn name={'test'}
                   onClick={() => alert('hello')}/>
            <MyInput type={'input'} value={''}
                     onChange={()=> console.log('hello')}/>
                     <hr/>
            <SignInContainer/>
        </section>
    )
}