import React, {useEffect} from 'react';
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


export const CardsPage = React.memo(() => {
    const {id} = useParams<{id:string}>();
    const {cards,currentPage,pageSize,sortCards} = useSelector((store: AppStateType) => store.cards);
    const serverError = useSelector<AppStateType, string>(state => state.app.serverError);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCardsTC(id));
    }, [dispatch,id,currentPage, pageSize, sortCards]);

    const model: TableNyaModelType[] = cardsModel(
        () => dispatch(addCardTC(id)),
        (card_id: string) => dispatch(deleteCardTC(card_id, id)),
        (card_id: string) => dispatch(updateCardTC(card_id, id)),
    );


    return (
        <section className={st.containerWrapper}>
            <CardsSearch id={id}/>
            Cards Page
            <MyTable model={model} data={cards} title={'Cards'}/>
            <CardsPagination/>
            {serverError && <MySnackBar errorServer={serverError}/>}
        </section>
    );
});


