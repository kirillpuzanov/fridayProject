import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../main/m2-bll/store';
import {PacksTypeF} from '../p2-bll/cardPackTypes';
import {addPack, cardPackActions, deletePack, updatePack} from '../p2-bll/cardPack-reducer';
import {packsModel} from './PacksModel';
import MyTable from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import st from './PacksModel.module.css';
import {getPacks} from '../../../../main/m2-bll/packs-reducer';
import {SearchContainer} from '../../../../main/common/search/SearchContainer';
import {PaginatorContainer} from '../../../../main/common/Paginator/PaginatorContainer';
import {ProfileType} from '../../../f-1-all/f-1_autorization/f-1_dal/authAPI';
import {CardPacksStateType} from '../../../f-1-all/f-2_PacksTable/f-2_bll/cardPacks-reducer';

const PacksContainer = React.memo(() => {
    const {
        sortMax,
        sortMin,
        packName,
        currentPage,
        pageSize,
        sortPacks,
        user_id,
        cardPacks
    } = useSelector<AppStateType, CardPacksStateType & PacksTypeF>(state => state.cardPack);
    const {_id} = useSelector<AppStateType, ProfileType>(state => state.profile.profile);


    const [myPacks, setMyPacks] = useState<boolean>(!!user_id);


    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(CardPackTC());
        dispatch(getPacks());

    }, [dispatch]);

    const setMyPacksCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(cardPackActions.setUserPack_id(myPacks ? '' : _id));
        // dispatch(CardPackTC());
        dispatch(getPacks());
        setMyPacks(e.target.checked);
    }, [setMyPacks, dispatch, myPacks, _id]);

    const model = packsModel(
        () => dispatch(addPack()),
        (packId: string) => dispatch(deletePack(packId)),
        (packId: string) => dispatch(updatePack(packId)),
    );
    useEffect(() => {
        dispatch(getPacks());
    }, [sortMax, sortMin, packName, currentPage, pageSize, sortPacks, user_id]);
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
