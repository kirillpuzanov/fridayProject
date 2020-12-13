import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {AppStateType} from '../../../../main/m2-bll/store';
import MyTable, {TableNyaModelType} from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import {cardsModel} from './CardsModel';
import {addCardTC, deleteCardTC, getCardsTC, updateCardTC} from '../c2-bll/cards-reducer';
import {CardsPagination} from './cardsPagination/CardsPagination';
import {CardsSearch} from './cardsSearch/CardsSearch';
import {MySnackBar} from '../../../../main/common/myComponent/MySnackBar/MySnackBar';
import st from '../../f-2_PacksTable/f-2_ui/Packs.module.css';
import ModalContainer from '../../../f-2-modal/ModalContainer';
import {CardType} from '../c2-bll/CardTypes';


export const CardsPage = React.memo(() => {
    const {id} = useParams<{ id: string }>();
    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards);
    const currentPage = useSelector<AppStateType, number>(state => state.cards.currentPage);
    const pageSize = useSelector<AppStateType, number>(state => state.cards.pageSize);
    const sortCards = useSelector<AppStateType, string>(state => state.cards.sortCards);
    const serverError = useSelector<AppStateType, string>(state => state.app.serverError);

    // const {cards,currentPage,pageSize,sortCards} = useSelector<AppStateType,any>(state => state.cards)
    console.log('render cards logik');
    const dispatch = useDispatch();
    useEffect(() => {
        debugger
        dispatch(getCardsTC(id));
    }, [dispatch, id, currentPage, pageSize, sortCards]);


//Opens modal windows
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    // set right callback to modal (ternary expression)
    const [updateDeck, setUpdateDeck] = useState(true);
    //provide card id for modal component
    const [cardId, setCardId] = useState('');
    //delete or change modal
    const [flagChangeModal, setFlagChangeModal] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentAnswer, setCurrentAnswer] = useState('');

    console.log('render cards');

    //these funcs open modals
    const openAddModal = useCallback(() => {
        setFlagChangeModal(true);
        setTitle('It is time to create a new card');
        setUpdateDeck(false);
        setIsOpen(true);

    }, []);

    const openDeleteModal = useCallback((currentId: string, currentQuestion: string) => {
        setCardId(currentId);
        setFlagChangeModal(false);
        setTitle(`Do you want to delete   ${currentQuestion}   card?`);
        setIsOpen(true);

    }, []);

    const openUpdateModal = useCallback((currentId: string, currentQuestion: string, currentAnswer: string) => {
        setCardId(currentId);
        setCurrentQuestion(currentQuestion);
        setCurrentAnswer(currentAnswer);
        setFlagChangeModal(true);
        setUpdateDeck(true);
        setTitle(`Update   ${currentQuestion}   card`);
        setIsOpen(true);

    }, []);


    const confirmDelete = useCallback(() => {
        dispatch(deleteCardTC(cardId, id));
    }, [dispatch, cardId, id]);

    const addModal = useCallback((cardQuestion?: string, cardAnswer?: string) => {
        dispatch(addCardTC(id, cardQuestion, cardAnswer));
    }, [dispatch, id]);

    const updateModal = useCallback((cardQuestion?: string, cardAnswer?: string) => {
        dispatch(updateCardTC(cardId, id, cardQuestion, cardAnswer));
    }, [dispatch, cardId, id]);


    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);


    const model: TableNyaModelType[] = cardsModel(
        () => openAddModal(),
        (currentId, currentQuestion) => openDeleteModal(currentId, currentQuestion),
        (currentId, currentQuestion, currentAnswer) =>
            openUpdateModal(currentId, currentQuestion, currentAnswer),
    );


    return (
        <>
            {console.log('render cards jsx')}
            {flagChangeModal ?
                <ModalContainer title={title} closeModal={closeModal} isOpen={isOpen}
                                changePack={updateDeck ? updateModal : addModal}
                                buttonName={updateDeck ? 'UPDATE' : 'ADD'}
                                updateAnswer={updateDeck ? currentAnswer : ''}
                                updateItemName={updateDeck ? currentQuestion : ''}


                />
                :
                <ModalContainer title={title} closeModal={closeModal}
                                changePack={confirmDelete} isOpen={isOpen}
                                buttonName={'DELETE'}
                                updateAnswer={currentAnswer}
                                updateItemName={currentQuestion}
                />
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


