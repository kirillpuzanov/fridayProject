import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {AppStateType} from '../../../../main/m2-bll/store';
import MyTable, {TableNyaModelType} from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import {cardsModel} from './CardsModel';
import {addCardTC, deleteCardTC, getCardsTC, updateCardTC} from '../c1-bll/cards-reducer';


const CardsContainer = React.memo(() => {
    const {id} = useParams<any>();
    const {cards} = useSelector((store: AppStateType) => store.cards);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getCardsTC(id));
    }, [dispatch, id]);

    const model: TableNyaModelType[] = cardsModel(
        () => dispatch(addCardTC(id)),
        (card_id: string) => dispatch(deleteCardTC(card_id, id)),
        (card_id: string) => dispatch(updateCardTC(card_id, id)),
    );

    return (
        <div>
            <MyTable model={model} data={cards} title={'Cards'}/>
        </div>
    );
});

export default CardsContainer;
