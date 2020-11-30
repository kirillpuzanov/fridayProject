// import React, {useCallback} from 'react';
// import {Search} from './Search';
// import {useDispatch, useSelector} from 'react-redux';
// import {AppStateType} from '../../m2-bll/store';
// import {
//     packActions,
//     PacksStateType,
//     PackTC
// } from '../../../features/f-1-all/f-2_PacksTable/f-2_bll/packs-reducer';
//
//
// export const SearchContainer = () => {
//     const dispatch = useDispatch();
//     const {sortMin, sortMax,packName} = useSelector<AppStateType,PacksStateType>(state => state.packs)
//     let valueMultiRAnge = [sortMin, sortMax]
//
//     const onChangeMultiRange = useCallback((value: number[]) => {
//         dispatch(packActions.setSortMaxAC(value[1]))
//         dispatch(packActions.setSortMinAC(value[0]))
//     }, [dispatch]);
//
//     const onInputChange = useCallback((searchName: string) => {
//         dispatch(packActions.setPacksNameAC(searchName))
//     }, [dispatch]);
//
//     const onSearchBtn = useCallback(() => {
//         dispatch(PackTC())
//     },[dispatch])
//     const onShowAll = useCallback( ()=> {
//         dispatch(packActions.setSortMaxAC(100))
//         dispatch(packActions.setSortMinAC(0))
//         dispatch(packActions.setPacksNameAC(''))
//         dispatch(PackTC())
//     },[dispatch])
//
//     return (
//         <Search onChange={onInputChange} inputValue={packName} step={2} domain={[0, 100]}
//                 valueMultiRAnge={valueMultiRAnge}
//                 onChangeMultiRange={onChangeMultiRange}
//                 onSearch={onSearchBtn} onShowAll={onShowAll}
//         />
//     )
// }
export default 1