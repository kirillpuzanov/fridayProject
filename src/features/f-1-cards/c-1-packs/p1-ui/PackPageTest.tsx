import React, {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {CardPackTC} from '../p2-bll/cardPack-reducer';


export const PackPageTest = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CardPackTC);
    }, [dispatch]);
    const setPack = useCallback((e: any) => {
        dispatch(CardPackTC());
    }, [dispatch]);


    return <>
        <button onClick={setPack}>press me</button>
    </>;
};