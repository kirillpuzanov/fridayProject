import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../main/m2-bll/store';
import {PacksType} from '../p2-bll/cardPackTypes';
import {CardPackTC} from '../p2-bll/cardPack-reducer';

const PacksContainer = React.memo(() => {

    const packs = useSelector<AppStateType, PacksType>(state => state.cardPack);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CardPackTC());

    }, [dispatch]);

    const setMyPacksCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(PacksActions.setPackUser_id(myPacks ? '' : _id));
        dispatch(getPacks());
        setMyPacks(e.target.checked);
    }, [setMyPacks, dispatch, myPacks, _id]);

    const model = packsModel(
        () => dispatch(addPack()),
        (id: string) => dispatch(deletePack(id)),
        (id: string) => dispatch(updatePack(id)),
    );

    DEV_VERSION && console.log('render PacksContainer');
    return (
        <div>
            <label>
                <input
                    type={'checkbox'}
                    checked={myPacks}
                    onChange={setMyPacksCallback}
                />
                my packs
            </label>
            <TableNya model={model} data={packs} title={'CardPacks'}/>
        </div>
    );
});

export default PacksContainer;
