import React from 'react';

type PropsType = {
    title: string
    placeholderLogin: string
    placeholderPassword: string
}


export const SignIn: React.FC<any> = (props) => {


    return <form onSubmit={props.onSubmit}>;
    <div >
        {props.title}
        <input type='email' value={props.value} name={props.name} onChange={props.onChange} />
        <input type="text" placeholder={props.placeholderPassword}/>
        <div>
            <span>RemebmerMe</span>
        </div>
        <div>Forget password?</div>
        <div>
            <button type='submit'>SingIn</button>
        </div>

    </div>
    </form>
};