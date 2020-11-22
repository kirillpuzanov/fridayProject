import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../main/m2-bll/store';
import {PacksType} from '../p2-bll/cardPackTypes';
import {addPack, cardPackActions, CardPackTC, deletePack, updatePack} from '../p2-bll/cardPack-reducer';
import {ProfileType} from '../../../../main/m3-dal/authAPI';
import {packsModel} from './PacksModel';
import MyTable from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import st from './PacksModel.module.css';
import {SearchContainer} from '../../../../main/m1-ui/common/search/SearchContainer';
import {PaginatorContainer} from '../../../../main/m1-ui/common/Paginator/PaginatorContainer';
import {getPacks, PacksStateType} from '../../../../main/m2-bll/packs-reducer';

const PacksContainer = React.memo(() => {

    const {cardPacks, userPack_id} = useSelector<AppStateType, PacksType>(state => state.cardPack);
    const {_id} = useSelector<AppStateType, ProfileType>(state => state.profile.profile);
    const [myPacks, setMyPacks] = useState<boolean>(!!userPack_id);
    const {sortMax, sortMin, packName, currentPage, pageSize, sortPacks, packUser_id} = useSelector<AppStateType, PacksStateType>(state => state.pack)


    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(CardPackTC());
        dispatch(getPacks())

    }, [dispatch]);

    const setMyPacksCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(cardPackActions.setUserPack_id(myPacks ? '' : _id));
        // dispatch(CardPackTC());
        dispatch(getPacks())
        setMyPacks(e.target.checked);
    }, [setMyPacks, dispatch, myPacks, _id]);

    const model = packsModel(
        () => dispatch(addPack()),
        (packId: string) => dispatch(deletePack(packId)),
        (packId: string) => dispatch(updatePack(packId)),
    );
    useEffect(() => {
        dispatch(getPacks())
    }, [sortMax, sortMin, packName, currentPage, pageSize, sortPacks, packUser_id])
    return (
        <div className={st.containerWrapper}>
            <SearchContainer/>
            <label>
                <input
                    type={'checkbox'}
                    checked={myPacks}
                    onChange={setMyPacksCallback}
                />
                my packs
            </label>
            <MyTable model={model} data={cardPacks} title={'CardPacks'}/>
            <PaginatorContainer/>
        </div>
    );
});

export default PacksContainer;
