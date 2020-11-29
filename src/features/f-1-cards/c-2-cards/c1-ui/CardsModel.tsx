import React from 'react';
import {TableNyaModelType} from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import {CardType} from '../c1-bll/CardTypes';
import TableBtn from '../../../../main/m1-ui/common/myComponent/BtnForTable/TableBtn';

export const cardsModel = (
    add: () => void,
    del: (id: string) => void,
    update: (id: string) => void,
): TableNyaModelType[] => [
    {
        title: (index, loading) => (
            <div key={'question-title-' + index} style={{width: 150}}>question</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'question-cell-' + dataItem._id} style={{width: 150}}>
                {dataItem.question}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'answer-title-' + index} style={{width: 150}}>answer</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'answer-cell-' + dataItem._id} style={{width: 150}}>
                {dataItem.answer}
            </div>
        )
    },

    {
        title: (index, loading) => (
            <div key={'grade-title-' + index} style={{width: 150}}>Grade</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'grade-cell-' + dataItem._id} style={{width: 150}}>
                {dataItem.grade.toFixed(10)}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'updated-title-' + index} style={{width: 150}}>updated</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'updated-cell-' + dataItem._id} style={{width: 150}}>
                {dataItem.updated.slice(5, 16)}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'url-title-' + index} style={{width: 150}}>url</div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'url-cell-' + dataItem._id} style={{width: 150}}>
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
            <div key={'buttons-title-' + index} style={{width: 150}}>
                <TableBtn onClick={add}>add</TableBtn>
            </div>
        ),
        render: (dataItem: CardType, modelIndex, dataIndex, loading) => (
            <div key={'buttons-cell-' + dataItem._id} style={{width: 250}}>
                <TableBtn onClick={() => del(dataItem._id)}>delete</TableBtn>
                <TableBtn onClick={() => update(dataItem._id)}>update</TableBtn>

            </div>
        )
    },

];
