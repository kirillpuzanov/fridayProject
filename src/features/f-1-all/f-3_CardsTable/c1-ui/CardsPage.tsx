import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {AppStateType} from '../../../../main/m2-bll/store';
import MyTable, {TableNyaModelType} from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import {cardsModel} from './CardsModel';
import {addCardTC, deleteCardTC, getCardsTC} from '../c2-bll/cards-reducer';
import {CardsPagination} from './cardsPagination/CardsPagination';
import {CardsSearch} from './cardsSearch/CardsSearch';
import {MySnackBar} from '../../../../main/common/myComponent/MySnackBar/MySnackBar';
import st from '../../f-2_PacksTable/f-2_ui/Packs.module.css';
import {deletePack, updatePack} from "../../f-2_PacksTable/f-2_bll/packs-reducer";
import ModalContainer from "../../../f-2-modal/ModalContainer";


export const CardsPage = React.memo(() => {
    const {id} = useParams<{ id: string }>();
    const {cards, currentPage, pageSize, sortCards} = useSelector((store: AppStateType) => store.cards);
    const serverError = useSelector<AppStateType, string>(state => state.app.serverError);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCardsTC(id));
    }, [dispatch, id, currentPage, pageSize, sortCards]);
//Opens modal windows
    const [isOpen, setIsOpen] = useState(false);
    /*
     Set modal title
    */
    const [title, setTitle] = useState('');
    // set right callback to modal (ternary expression)
    const [updateDeck, setUpdateDeck] = useState(true);
    //provide pack id for modal component
    const [packId, setPackId] = useState('');
    //delete or change modal
    const [flagChangeModal, setFlagChangeModal] = useState(true);


    //these funcs open modals
    const openAddModal = () => {
        setFlagChangeModal(true);
        setTitle('It is time to create a new deck');
        setUpdateDeck(false);
        setIsOpen(true);

    };

    const openDeleteModal = (currentId: string) => {
        setPackId(currentId)
        setFlagChangeModal(false);
        setTitle('Do you want to delete current card?');
        setIsOpen(true);

    };

    const openUpdateModal = (currentId: string) => {
        setPackId(currentId)
        setFlagChangeModal(true);
        setUpdateDeck(true);
        setTitle('Change this card');
        setIsOpen(true);

    };
    const confirmDelete = () => {
        dispatch(deleteCardTC(id,packId));
    };
    const addModal = (packName: string) => {
        dispatch(addCardTC(id,packName));
    };
    const updateModal = (packName: string) => {
        dispatch(updatePack(packId, packName));
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const model: TableNyaModelType[] = cardsModel(
        () => openAddModal(),
        (currentId) => openDeleteModal(currentId),
        (currentId) => openUpdateModal(currentId),
    );


    return (
        <>
            {flagChangeModal ?
                <ModalContainer title={title} closeModal={closeModal} isOpen={isOpen}
                                packId={packId} changePack={updateDeck ? updateModal : addModal}
                                buttonName={updateDeck ? 'UPDATE' : 'ADD'}/>
                :
                <ModalContainer title={title} closeModal={closeModal}
                                changePack={confirmDelete} isOpen={isOpen} packId={packId}
                                buttonName={'DELETE'}/>
            }

            <section className={st.containerWrapper}>
                <CardsSearch id={id}/>
                Cards Page
                <MyTable model={model} data={cards} title={'Cards'}/>
                <CardsPagination/>
                {serverError && <MySnackBar errorServer={serverError}/>}
            </section>
        </>
    );
});


