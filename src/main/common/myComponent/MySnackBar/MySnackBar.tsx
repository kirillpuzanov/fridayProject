import React, {useEffect} from 'react';
import style from './MySnackBar.module.css';
import {useDispatch} from 'react-redux';
import {authActions} from '../../../../fiatures/f-1_autorization/f-1_bll/auth-reducer';


type SnackBarType = {
    errorServer: string
}

export const MySnackBar = React.memo((props: SnackBarType) => {
    const dispatch = useDispatch();
    const {errorServer} = props;
    useEffect( ()=> {
        setTimeout( ()=> {
            dispatch(authActions.setError(''))
        }, 4000)
    },[])

    const closeSnackBar = () => {
        dispatch(authActions.setError(''))
    }

    return (
            <div className={style.MySnackBar}>
                <p className={style.MySnackBar_text}>{errorServer}</p>
                <button className={style.MySnackBar_btn} onClick={closeSnackBar}> + </button>
            </div>
    )
})
