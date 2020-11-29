import React from 'react';
import {TableNyaModelType} from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import {CardType} from '../c2-bll/CardTypes';
import TableBtn from '../../../../main/m1-ui/common/myComponent/BtnForTable/TableBtn';
import st from './Cards.module.css'
export const cardsModel = (
    add: () => void,
    del: (id: string) => void,
    update: (id: string) => void,
): TableNyaModelType[] => [
    {
        title: (index, loading) => (
            <div key={'question-title-' + index} className={st.item}>question</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'question-cell-' + dataItem._id} className={st.item}>
                {dataItem.question}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'answer-title-' + index} className={st.item}>answer</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'answer-cell-' + dataItem._id} className={st.item}>
                {dataItem.answer}
            </div>
        )
    },

    {
        title: (index, loading) => (
            <div key={'grade-title-' + index} className={st.item}>Grade</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'grade-cell-' + dataItem._id} className={st.item}>
                {dataItem.grade.toFixed(10)}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'updated-title-' + index} className={st.item}>updated</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'updated-cell-' + dataItem._id} className={st.item}>
                {dataItem.updated.slice(5, 16)}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'url-title-' + index} className={st.item}>url</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
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
        title: (index, loading) => (
            <div key={'buttons-title-' + index} className={st.item}>
                <TableBtn onClick={add}>add</TableBtn>
            </div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'buttons-cell-' + dataItem._id} className={st.item}>
                <TableBtn onClick={() => del(dataItem._id)}>delete</TableBtn>
                <TableBtn onClick={() => update(dataItem._id)}>update</TableBtn>

            </div>
        )
    },

];
