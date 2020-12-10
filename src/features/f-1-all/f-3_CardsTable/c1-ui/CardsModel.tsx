import React from 'react';
import {TableNyaModelType} from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import {CardType} from '../c2-bll/CardTypes';
import TableBtn from '../../../../main/m1-ui/common/myComponent/BtnForTable/TableBtn';
import st from './Cards.module.css';

export const cardsModel = (
    addModalPack: () => void,
    openDeleteModal: (cardId: string) => void,
    openUpdateModalPack: (cardId: string) => void
): TableNyaModelType[] => [
    {
        title: (index) => (
            <div key={'question-title-' + index} className={st.item}>question</div>
        ),
        render: (dataItem: CardType) => (
            <div key={'question-cell-' + dataItem._id} className={st.item}>
                {dataItem.question.slice(0, 30) + '..'}
            </div>
        )
    },
    {
        title: (index) => (
            <div key={'answer-title-' + index} className={st.item}>answer</div>
        ),
        render: (dataItem: CardType) => (
            <div key={'answer-cell-' + dataItem._id} className={st.item}>
                {dataItem.answer.slice(0, 30) + '..'}
            </div>
        )
    },
    {
        title: (index) => (
            <div key={'grade-title-' + index} className={st.item}>Grade</div>
        ),
        render: (dataItem: CardType) => (
            <div key={'grade-cell-' + dataItem._id} className={st.item}>
                {dataItem.grade.toFixed(5)}
            </div>
        )
    },
    {
        title: (index) => (
            <div key={'updated-title-' + index} className={st.item}>updated</div>
        ),
        render: (dataItem: CardType) => (
            <div key={'updated-cell-' + dataItem._id} className={st.item}>
                {dataItem.updated.slice(5, 16)}
            </div>
        )
    },
    {
        title: (index) => (
            <div key={'url-title-' + index} className={st.item}>url</div>
        ),
        render: (dataItem: CardType) => (
            <div key={'url-cell-' + dataItem._id} className={st.item}>
                {dataItem.answerImg}
                <div>{dataItem.answerVideo}</div>
                <div>{dataItem.questionImg}</div>
                <div>{dataItem.questionVideo}</div>
                <pre>{dataItem.comments}</pre>
            </div>
        )
    },
    {
        title: (index) => (
            <div key={'buttons-title-' + index} className={st.item}>
                <TableBtn onClick={() => {
                    addModalPack();
                }}>add</TableBtn>
            </div>
        ),
        render: (dataItem: CardType) => (
            <div key={'buttons-cell-' + dataItem._id} className={st.item}>
                <TableBtn onClick={() => openDeleteModal(dataItem._id)}>delete</TableBtn>
                <TableBtn onClick={() => {
                    openUpdateModalPack(dataItem._id);
                }}>update</TableBtn>
            </div>
        )
    },
];
