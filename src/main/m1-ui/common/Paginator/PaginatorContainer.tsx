import React, {useCallback} from 'react';
import {Paginator} from './Paginator';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../m2-bll/store';
import {packsActions, PacksStateType} from '../../../m2-bll/packs-reducer';


export const PaginatorContainer = ()=> {
    const dispatch = useDispatch();
    const {currentPage, pageSize, cardPacksTotalCount} = useSelector<AppStateType, PacksStateType>(state => state.pack)

    const onPageChanged = useCallback((pageNumber: number) => {
        dispatch(packsActions.setCurrentPageAC(pageNumber))
    }, [currentPage]);
    const togglePageSize = useCallback((pageNumber: number, pageSize: number) => {
        dispatch(packsActions.setPageSizeAC(pageNumber, pageSize))
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