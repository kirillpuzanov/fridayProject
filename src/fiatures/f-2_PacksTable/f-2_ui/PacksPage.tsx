import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../main/m2-bll/store';
import {ProfileType} from '../../f-1_autorization/f-1_dal/authAPI';
import {
    addPack,
    cardPackActions,
    CardPacksStateType,
    CardPackTC,
    deletePack,
    updatePack
} from '../f-2_bll/cardPacks-reducer';
import {packsModel} from './PacksModel';
import {SearchContainer} from '../../../main/common/search/SearchContainer';
import {PaginatorContainer} from '../../../main/common/Paginator/PaginatorContainer';
import st from'./Packs.module.css'
import {MyTable} from '../../../main/common/table/Table';


export const PacksPage = React.memo(() => {

    const {_id} = useSelector<AppStateType, ProfileType>(state => state.profile.profile);
    const {currentPage, pageSize, sortPacks, user_id,cardPacks} = useSelector<AppStateType, CardPacksStateType>(state => state.cardPack)
    const [myPacks, setMyPacks] = useState<boolean>(!!user_id);

    const dispatch = useDispatch();

    const setMyPacksCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(cardPackActions.setUserPack_id(myPacks ? '' : _id));
        // dispatch(CardPackTC());
        dispatch(CardPackTC())
        setMyPacks(e.target.checked);
    }, [setMyPacks, dispatch, myPacks, _id]);

    const model = packsModel(
        () => dispatch(addPack()),
        (packId: string) => dispatch(deletePack(packId)),
        (packId: string) => dispatch(updatePack(packId)),
    );
    useEffect(() => {
        dispatch(CardPackTC())
    }, [currentPage, pageSize, sortPacks, user_id])
    return (
        <section className={st.containerWrapper}>
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
        </section>
    );
});


