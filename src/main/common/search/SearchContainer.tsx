import React, {useCallback} from 'react';
import {Search} from './Search';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../m2-bll/store';
import {
    cardPackActions,
    CardPacksStateType,
    CardPackTC
} from '../../../features/f-1-all/f-2_PacksTable/f-2_bll/cardPacks-reducer';


export const SearchContainer = () => {
    const dispatch = useDispatch();
    const {sortMin, sortMax, packName} = useSelector<AppStateType, CardPacksStateType>(state => state.cardPack)
    let valueMultiRAnge = [sortMin, sortMax]

    const onChangeMultiRange = useCallback((value: number[]) => {
        dispatch(cardPackActions.setSortMaxAC(value[1]))
        dispatch(cardPackActions.setSortMinAC(value[0]))
    }, [valueMultiRAnge]);

    const onInputChange = useCallback((searchName: string) => {
        dispatch(cardPackActions.setPacksNameAC(searchName))
    }, [packName]);

    const onSearchBtn = useCallback(() => {
        dispatch(CardPackTC())
    },[])

    return (
        <Search onChange={onInputChange} step={5} domain={[0, 50]}
                valueMultiRAnge={valueMultiRAnge}
                onChangeMultiRange={onChangeMultiRange}
                onSearch={onSearchBtn}
        />
    )
}