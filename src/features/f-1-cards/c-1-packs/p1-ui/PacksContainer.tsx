import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../main/m2-bll/store';
import {PacksType} from '../p2-bll/cardPackTypes';
import {addPack, cardPackActions, CardPackTC, deletePack, updatePack} from '../p2-bll/cardPack-reducer';
import {ProfileType} from '../../../../main/m3-dal/authAPI';
import {packsModel} from './PacksModel';
import MyTable from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import st from './PacksModel.module.css';

const PacksContainer = React.memo(() => {

    const {cardPacks, userPack_id} = useSelector<AppStateType, PacksType>(state => state.cardPack);
    const {_id} = useSelector<AppStateType, ProfileType>(state => state.profile.profile);
    const [myPacks, setMyPacks] = useState<boolean>(!!userPack_id);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CardPackTC());

    }, [dispatch]);

    const setMyPacksCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(cardPackActions.setUserPack_id(myPacks ? '' : _id));
        dispatch(CardPackTC());
        setMyPacks(e.target.checked);
    }, [setMyPacks, dispatch, myPacks, _id]);

    const model = packsModel(
        () => dispatch(addPack()),
        (packId: string) => dispatch(deletePack(packId)),
        (packId: string) => dispatch(updatePack(packId)),
    );

    return (
        <div className={st.containerWrapper}>
            <label>
                <input
                    type={'checkbox'}
                    checked={myPacks}
                    onChange={setMyPacksCallback}
                />
                my packs
            </label>
            <MyTable model={model} data={cardPacks} title={'CardPacks'}/>
        </div>
    );
});

export default PacksContainer;
