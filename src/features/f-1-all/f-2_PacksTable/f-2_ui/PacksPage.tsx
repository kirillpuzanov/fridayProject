import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../main/m2-bll/store';
import {ProfileType} from '../../f-1_autorization/f-1_dal/authAPI';
import {deletePack, packActions, PacksStateType, PackTC, updatePack} from '../f-2_bll/packs-reducer';
import {packsModel} from './PacksModel';
import st from './Packs.module.css';
import {MyTable} from '../../../../main/common/table/Table';
import {PacksPagination} from './packsPagination/PacksPagination';
import {PacksSearch} from './packsSearch/PacksSearch';
import {MySnackBar} from '../../../../main/common/myComponent/MySnackBar/MySnackBar';
import ModalContainer from '../../../f-2-modal/ModalContainer';


export const PacksPage = React.memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    const addModalPack = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const {_id} = useSelector<AppStateType, ProfileType>(state => state.profile.profile);
    const {
        currentPage,
        pageSize,
        sortPacks,
        cardPacks,
        user_id
    } = useSelector<AppStateType, PacksStateType>(state => state.packs);
    const serverError = useSelector<AppStateType, string>(state => state.app.serverError);
    const [myPacks, setMyPacks] = useState<boolean>(!!user_id);

    const dispatch = useDispatch();

    const setMyPacksCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMyPacks(e.currentTarget.checked);
        dispatch(packActions.setUserPack_id(myPacks ? '' : _id));

        dispatch(PackTC());
    }, [_id, dispatch, myPacks]);

    const model = packsModel(
        () => addModalPack(),
        (packId: string) => dispatch(deletePack(packId)),
        (packId: string) => dispatch(updatePack(packId)),
    );


    useEffect(() => {
        dispatch(PackTC());
    }, [dispatch, currentPage, pageSize, sortPacks]);
    return (<>
            <ModalContainer closeModal={closeModal} isOpen={isOpen}/>

            <section className={st.containerWrapper}>
                <PacksSearch/>
                <label>
                    <input
                        type={'checkbox'}
                        checked={myPacks}
                        onChange={setMyPacksCallback}
                    />
                    my packs
                </label>
                <MyTable model={model} data={cardPacks} title={'CardPacks'}/>
                <PacksPagination/>
                {serverError && <MySnackBar errorServer={serverError}/>}
            </section>
        </>
    );
})


