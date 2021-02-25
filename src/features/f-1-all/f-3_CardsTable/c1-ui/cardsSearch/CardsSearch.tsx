import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Search} from '../../../../../main/common/search/Search';
import {CardsStateType} from '../../c2-bll/CardTypes';
import {AppStateType} from '../../../../../main/m2-bll/store';
import {CardsActions, getCardsTC} from '../../c2-bll/cards-reducer';




export const CardsSearch:React.FC<{id:string}> = ({id}) => {
    const dispatch = useDispatch();
    const {maxGrade, minGrade,cardQuestion} = useSelector<AppStateType,CardsStateType>(state => state.cards)
    let valueMultiRAnge = [minGrade, maxGrade]

    const onChangeMultiRange = useCallback((value: number[]) => {
        dispatch(CardsActions.setMaxGradeAC(value[1]))
        dispatch(CardsActions.setMinGradeAC(value[0]))
    }, [dispatch]);

    const onInputChange = useCallback((searchName: string) => {
        dispatch(CardsActions.setCardQuestionNameAC(searchName))
    }, [dispatch]);

    const onSearchBtn = useCallback(() => {
        dispatch(getCardsTC(id))
    },[dispatch,id])
    const onShowAll = useCallback( ()=> {
        dispatch(CardsActions.setMaxGradeAC(5))
        dispatch(CardsActions.setMinGradeAC(0))
        dispatch(CardsActions.setCardQuestionNameAC(''))
        dispatch(getCardsTC(id))
    },[dispatch,id])

    return (
        <Search onChange={onInputChange} inputValue={cardQuestion} step={1} domain={[0, 5]}
                valueMultiRAnge={valueMultiRAnge}
                onChangeMultiRange={onChangeMultiRange}
                onSearch={onSearchBtn} onShowAll={onShowAll}
        />
    )
}