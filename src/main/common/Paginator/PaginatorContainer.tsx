// import React, {useCallback} from 'react';
// import {Paginator} from './Paginator';
// import {useDispatch, useSelector} from 'react-redux';
// import {AppStateType} from '../../m2-bll/store';
// import {packActions, PacksStateType} from '../../../features/f-1-all/f-2_PacksTable/f-2_bll/packs-reducer';
//
//
// export const PaginatorContainer = ()=> {
//     const dispatch = useDispatch();
//     const {currentPage, pageSize, cardPacksTotalCount} =
//         useSelector<AppStateType, PacksStateType>(state => state.packs)
//
//     const onPageChanged = useCallback((pageNumber: number) => {
//         dispatch(packActions.setCurrentPageAC(pageNumber))
//     }, [dispatch,currentPage]);
//     const togglePageSize = useCallback((pageNumber: number, pageSize: number) => {
//         dispatch(packActions.setPageSizeAC(pageNumber, pageSize))
//     }, [dispatch,pageSize])
//
//
//
//     return(
//         <Paginator
//             pageSize={pageSize} totalItemsCount={cardPacksTotalCount}
//             onPageChanged={onPageChanged}
//             currentPage={currentPage}
//             togglePageSize={togglePageSize}
//         />
//     )
// }

export default 1