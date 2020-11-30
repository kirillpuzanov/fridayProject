import React, {useEffect} from 'react';
import style from './MySnackBar.module.css';
import {useDispatch} from 'react-redux';
import {appActions} from '../../../m2-bll/app-reducer';


type SnackBarType = {
    errorServer: string
}

export const MySnackBar = React.memo((props: SnackBarType) => {
    const dispatch = useDispatch();
    const {errorServer} = props;
    useEffect( ()=> {
        setTimeout( ()=> {
            closeSnackBar()
        }, 4000)
    },[])

    const closeSnackBar = () => {
        dispatch(appActions.setServerError(''))
    }

    return (
            <div className={style.MySnackBar}>
                <p className={style.MySnackBar_text}>{errorServer}</p>
                <button className={style.MySnackBar_btn} onClick={closeSnackBar}> + </button>
            </div>
    )
})
