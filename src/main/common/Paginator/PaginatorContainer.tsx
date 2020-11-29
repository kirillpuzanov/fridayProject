import React, {useCallback} from 'react';
import {Paginator} from './Paginator';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../m2-bll/store';
import {cardPackActions, CardPacksStateType} from '../../../features/f-1-all/f-2_PacksTable/f-2_bll/cardPacks-reducer';


export const PaginatorContainer = ()=> {
    const dispatch = useDispatch();
    const {currentPage, pageSize, cardPacksTotalCount} =
        useSelector<AppStateType, CardPacksStateType>(state => state.cardPack)

    const onPageChanged = useCallback((pageNumber: number) => {
        dispatch(cardPackActions.setCurrentPageAC(pageNumber))
    }, [currentPage]);
    const togglePageSize = useCallback((pageNumber: number, pageSize: number) => {
        dispatch(cardPackActions.setPageSizeAC(pageNumber, pageSize))
    }, [])

    

    return(
        <Paginator
            pageSize={pageSize} totalItemsCount={cardPacksTotalCount}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
            togglePageSize={togglePageSize}
        />
    )
}