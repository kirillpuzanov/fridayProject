import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Paginator} from '../../../../../main/common/Paginator/Paginator';
import {AppStateType} from '../../../../../main/m2-bll/store';
import {CardsStateType} from '../../c2-bll/CardTypes';
import {CardsActions} from '../../c2-bll/cards-reducer';


export const CardsPagination = ()=> {
    const dispatch = useDispatch();
    const {currentPage, pageSize, cardsTotalCount} =
        useSelector<AppStateType, CardsStateType>(state => state.cards)

    const onPageChanged = useCallback((pageNumber: number) => {
        dispatch(CardsActions.setCurrentPageCardsAC(pageNumber))
    }, [dispatch,currentPage]);
    const togglePageSize = useCallback((pageNumber: number, pageSize: number) => {
        dispatch(CardsActions.setPageSizeCardsAC(pageNumber, pageSize))
    }, [pageSize])

    

    return(
        <Paginator
            pageSize={pageSize} totalItemsCount={cardsTotalCount}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
            togglePageSize={togglePageSize}
        />
    )
}