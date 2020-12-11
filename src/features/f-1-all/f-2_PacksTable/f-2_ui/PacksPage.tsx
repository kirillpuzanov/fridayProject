import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../main/m2-bll/store';
import {ProfileType} from '../../f-1_autorization/f-1_dal/authAPI';
import {addPack, deletePack, packActions, PacksStateType, PackTC, updatePack} from '../f-2_bll/packs-reducer';
import {packsModel} from './PacksModel';
import st from './Packs.module.css';
import {MyTable} from '../../../../main/common/table/Table';
import {PacksPagination} from './packsPagination/PacksPagination';
import {PacksSearch} from './packsSearch/PacksSearch';
import {MySnackBar} from '../../../../main/common/myComponent/MySnackBar/MySnackBar';
import ModalContainer from '../../../f-2-modal/ModalContainer';


export const PacksPage = React.memo(() => {
    const dispatch = useDispatch();
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
    //Opens modal windows
    const [isOpen, setIsOpen] = useState(false);
    // Set modal title
    const [title, setTitle] = useState('');
    // set right callback to modal (ternary expression)
    const [updateDeck, setUpdateDeck] = useState(true);
    //provide pack id for modal component
    const [packId, setPackId] = useState('');
    //delete or change modal
    const [flagChangeModal, setFlagChangeModal] = useState(true);

    const filteredPack = cardPacks.filter(e => e._id === packId)
    debugger


    //these funcs open modals
    const openAddModalPack = () => {
        setFlagChangeModal(true);
        setTitle('It is time to create a new deck');
        setUpdateDeck(false);
        setIsOpen(true);

    };

    const openDeleteModal = (currentId: string, currentPackName: string) => {
        setPackId(currentId);
        setFlagChangeModal(false);
        setTitle('Do you want to delete ' + currentPackName + ' deck?');
        setIsOpen(true);

    };

    const openUpdateModalPack = (currentId: string, currentPackName: string) => {
        setPackId(currentId);
        setFlagChangeModal(true);
        setUpdateDeck(true);
        setTitle('Change name ' + currentPackName + ' on new one!');
        setIsOpen(true);

    };
    const confirmDeletePack = () => {
        dispatch(deletePack(packId));
    };


    const addModalPack = (packName?: string) => {
        dispatch(addPack(packName));
    };
    const updateModalPack = (packName?: string) => {
        debugger
        dispatch(updatePack(packId, packName));
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const setMyPacksCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMyPacks(e.currentTarget.checked);
        dispatch(packActions.setUserPack_id(myPacks ? '' : _id));
        dispatch(PackTC());
    }, [_id, dispatch, myPacks]);

    const model = packsModel(
        () => openAddModalPack(),
        (currentId, currentPackName) => openDeleteModal(currentId, currentPackName),
        (currentId, currentPackName) => openUpdateModalPack(currentId, currentPackName),
    );
    useEffect(() => {
        dispatch(PackTC());
    }, [dispatch, currentPage, pageSize, sortPacks]);
    return (<>
            {flagChangeModal ?
                <ModalContainer title={title} closeModal={closeModal} isOpen={isOpen}
                                changePack={updateDeck ? updateModalPack : addModalPack}
                                buttonName={updateDeck ? 'UPDATE' : 'ADD'}
                                updateItemName={packId ? filteredPack[0].name : ''}
                />
                :
                <ModalContainer title={title} closeModal={closeModal}
                                changePack={confirmDeletePack} isOpen={isOpen}
                                buttonName={'DELETE'}

                />
            }


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
});


