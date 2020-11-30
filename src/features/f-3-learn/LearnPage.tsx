import React, {useEffect, useState} from 'react';
import {CardType} from '../f-1-all/f-3_CardsTable/c2-bll/CardTypes';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../main/m2-bll/store';
import {useParams} from 'react-router-dom';
import {getCardsTC, gradeCardsTC} from '../f-1-all/f-3_CardsTable/c2-bll/cards-reducer';


const getSortCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    return cards[res.id + 1];
}
const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

export const LearnPage = () => {
    const dispatch = useDispatch();
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [firstVisit, setFirstVisit] = useState<boolean>(true);
    const {cards} = useSelector((state: AppStateType) => state.cards);
    const {id} = useParams<{ id: string }>();
    const [card, setCard] = useState<CardType>({} as CardType);

    useEffect(() => {
        if (firstVisit) {
            dispatch(getCardsTC(id));
            setFirstVisit(false);
        }

        if (cards.length > 0) setCard(getSortCard(cards));

    }, [dispatch, id, cards, firstVisit]);

    const onNextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(gradeCardsTC((+e.currentTarget.value + 1), card._id))
        setShowAnswer(false)
        setCard(getSortCard(cards))
    }

    return (
        <section>
            <div>
                Learn Page
                <div>{card.question}</div>
                <div>
                    <button onClick={() => setShowAnswer(true)}>Show Answer..</button>
                </div>
                {showAnswer && (
                    <>
                        <div>{card.answer}</div>
                        {grades.map((el, i) => (
                            <button onClick={onNextQuestion} value={i} key={'g-' + i}>{el}</button>
                        ))}
                    </>
                )}
            </div>
        </section>
    )
}