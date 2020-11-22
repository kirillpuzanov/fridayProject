import React, {useCallback} from 'react';
import {Search} from './Search';
import {getPacks, packsActions, PacksStateType} from '../../../m2-bll/packs-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../m2-bll/store';


export const SearchContainer = ()=> {
    const dispatch = useDispatch();
    const {sortMin,sortMax,packName} = useSelector<AppStateType, PacksStateType>(state => state.pack)
    let valueMultiRAnge = [sortMin,sortMax]

    const onChangeMultiRange = useCallback((value: number[]) => {
        dispatch(packsActions.setSortMaxAC(value[1]))
        dispatch(packsActions.setSortMinAC(value[0]))
    }, [valueMultiRAnge]);

    const onInputChange = useCallback((searchName: string) => {
        dispatch(packsActions.setPacksNameAC(searchName))
    }, [packName]);

    const onSearchBtn = useCallback(() => {
        dispatch(getPacks())
    }, [dispatch])

    return (
        <Search onChange={onInputChange} step={5} domain={[0, 50]}
                valueMultiRAnge={valueMultiRAnge}
                onChangeMultiRange={onChangeMultiRange}
                onSearch={onSearchBtn}
        />
    )
}