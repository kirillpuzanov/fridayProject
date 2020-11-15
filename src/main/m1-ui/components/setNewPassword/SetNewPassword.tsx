import React, {ChangeEvent, useState} from 'react';
import styles from './SetNewPassword.module.css'
import axios from 'axios'
import {useDispatch} from "react-redux";


export const SetNewPassword: React.FC = () => {

    const dispatch = useDispatch()

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [acceptedNewPassword, setAcceptedNewPassword] = useState('')

    const [error, setError] = useState(false)

    const oldPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('oldPassword value: ', oldPassword)
        const checkOldPassword = event.target.value.trim()
        setOldPassword(checkOldPassword)
    }

    const newPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('newPassword value: ', newPassword)
        const checkNewPassword = event.target.value.trim()
        setNewPassword(checkNewPassword)
    }

    const acceptPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('acceptedNewPassword value: ', acceptedNewPassword)
        const checkAcceptedNewPassword = event.target.value.trim()
        setAcceptedNewPassword(checkAcceptedNewPassword)
    }

    const acceptNewPassword = () => {
        if (newPassword !== acceptedNewPassword) {
            setError(true)
        } else{

        }
    }

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(res => {
            console.log(res)
        })


    return <section>
        <h1>Change your password</h1>
        <div>
            <span>Enter your old password:</span><br/>
            <input type="text" onChange={oldPasswordHandler}/>
        </div>
        <div>
            <span>Enter your new password:</span><br/>
            <input type="text" onChange={newPasswordHandler}/>
        </div>
        <div>
            <span>Repeat your new password:</span><br/>
            <input type="text" onChange={acceptPasswordHandler}/>
        </div>
        {
            error && <div className={styles.error}>Your new password fields are different</div>
        }
        <div>
            <button onClick={() => acceptNewPassword()}>Accept</button>
        </div>
    </section>
}