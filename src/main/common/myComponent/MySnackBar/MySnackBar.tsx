import React, {useCallback, useEffect} from 'react';
import style from './MySnackBar.module.css';
import {useDispatch} from 'react-redux';
import {appActions} from '../../../m2-bll/app-reducer';


type SnackBarType = {
    errorServer: string
}

export const MySnackBar = React.memo((props: SnackBarType) => {
    const dispatch = useDispatch();
    const {errorServer} = props;

    const closeSnackBar = useCallback(() => {
        dispatch(appActions.setServerError(''))
    },[dispatch])
    useEffect(() => {
        const TimerId = setTimeout(() => {
            closeSnackBar()
        }, 4000)
        return () => {
            clearTimeout(TimerId)
        }
    }, [closeSnackBar])

    return (
        <div className={style.MySnackBar}>
            <p className={style.MySnackBar_text}>{errorServer}</p>
            <button className={style.MySnackBar_btn} onClick={closeSnackBar}> +</button>
        </div>
    )
})
