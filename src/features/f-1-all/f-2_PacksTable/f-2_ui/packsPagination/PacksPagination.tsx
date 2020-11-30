import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../../main/m2-bll/store';
import {packActions, PacksStateType} from '../../f-2_bll/packs-reducer';
import {Paginator} from '../../../../../main/common/Paginator/Paginator';


export const PacksPagination = ()=> {
    const dispatch = useDispatch();
    const {currentPage, pageSize, cardPacksTotalCount} =
        useSelector<AppStateType, PacksStateType>(state => state.packs)

    const onPageChanged = useCallback((pageNumber: number) => {
        dispatch(packActions.setCurrentPageAC(pageNumber))
    }, [currentPage]);
    const togglePageSize = useCallback((pageNumber: number, pageSize: number) => {
        dispatch(packActions.setPageSizeAC(pageNumber, pageSize))
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