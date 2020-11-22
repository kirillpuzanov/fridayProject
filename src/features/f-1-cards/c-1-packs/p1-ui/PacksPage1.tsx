import React, {ChangeEvent, useCallback, useEffect} from 'react';
import MyTable from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import {useDispatch} from 'react-redux';
import {CardPackTC} from '../p2-bll/cardPack-reducer';


export const PackPage = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(CardPackTC)
    },[dispatch])
    const setPack= useCallback((e:any)=>{
        dispatch(CardPackTC())
    },[dispatch])


    return <>
        {/*<MyTable data={''}/>*/}
        <button onClick={setPack} >press me</button>
        </>
}