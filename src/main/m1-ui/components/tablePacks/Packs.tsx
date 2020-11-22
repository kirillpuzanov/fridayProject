import React, {useEffect} from 'react';
import {AppStateType} from '../../../m2-bll/store';
import {useDispatch, useSelector} from 'react-redux';
import {getPacks, PacksStateType} from '../../../m2-bll/packs-reducer';
import {PaginatorContainer} from '../../common/Paginator/PaginatorContainer';
import {SearchContainer} from '../../common/search/SearchContainer';

type PacksType = {

}


export const Packs = (props: PacksType) => {

    const dispatch = useDispatch();
    const {sortMax, sortMin, packName, currentPage, pageSize, sortPacks, packUser_id} = useSelector<AppStateType, PacksStateType>(state => state.pack)

    useEffect(() => {
        dispatch(getPacks())
    }, [sortMax, sortMin, packName, currentPage, pageSize, sortPacks, packUser_id])


    return (
        <section>
            <SearchContainer/>
            <PaginatorContainer/>
        </section>
    )
}