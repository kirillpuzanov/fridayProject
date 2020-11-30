import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../../main/m2-bll/store';
import {packActions, PacksStateType, PackTC} from '../../f-2_bll/packs-reducer';
import {Search} from '../../../../../main/common/search/Search';




export const PacksSearch = () => {
    const dispatch = useDispatch();
    const {sortMin, sortMax,packName} = useSelector<AppStateType,PacksStateType>(state => state.packs)
    let valueMultiRAnge = [sortMin, sortMax]

    const onChangeMultiRange = useCallback((value: number[]) => {
        dispatch(packActions.setSortMaxAC(value[1]))
        dispatch(packActions.setSortMinAC(value[0]))
    }, [dispatch]);

    const onInputChange = useCallback((searchName: string) => {
        dispatch(packActions.setPacksNameAC(searchName))
    }, [dispatch]);

    const onSearchBtn = useCallback(() => {
        dispatch(PackTC())
    },[dispatch])
    const onShowAll = useCallback( ()=> {
        dispatch(packActions.setSortMaxAC(100))
        dispatch(packActions.setSortMinAC(0))
        dispatch(packActions.setPacksNameAC(''))
        dispatch(PackTC())
    },[dispatch])

    return (
        <Search onChange={onInputChange} inputValue={packName} step={2} domain={[0, 100]}
                valueMultiRAnge={valueMultiRAnge}
                onChangeMultiRange={onChangeMultiRange}
                onSearch={onSearchBtn} onShowAll={onShowAll}
        />
    )
}