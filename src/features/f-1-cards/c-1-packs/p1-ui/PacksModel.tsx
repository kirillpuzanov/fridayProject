import React from 'react';
import {TableNyaModelType} from '../../../../main/m1-ui/common/myComponent/MyTable/TableNya';
import {CardPackType} from '../p2-bll/cardPackTypes';
import st from './PacksModel.module.css';
import TableBtn from '../../../../main/m1-ui/common/myComponent/BtnForTable/TableBtn';

export const packsModel = (
    addPack: () => void,
    deletePack: (packId: string) => void,
    updatePack: (packId: string) => void,
): TableNyaModelType[] => [
    {
        title: (index, loading) => (
            <div key={'name-title-' + index} className={st.item}>Name</div>
        ),
        render: (dataItem: CardPackType, modelIndex, dataIndex, loading) => (
            <div key={'name-cell-' + dataItem._id} className={st.item}>
                {dataItem.name}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'cardsCount-title-' + index} className={st.item}>cardsCount</div>
        ),
        render: (dataItem: CardPackType, modelIndex, dataIndex, loading) => (
            <div key={'cardsCount-cell-' + dataItem._id} className={st.item}>
                {dataItem.cardsCount}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'updated-title-' + index} className={st.item}>updated</div>
        ),
        render: (dataItem: CardPackType, modelIndex, dataIndex, loading) => (
            <div key={'updated-cell-' + dataItem._id} className={st.item}>
                {dataItem.updated.slice(5, 16)}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'url-title-' + index} className={st.item}>url</div>
        ),
        render: (dataItem: CardPackType, modelIndex, dataIndex, loading) => (
            <div key={'url-cell-' + dataItem._id} className={st.item}>
                {dataItem.deckCover}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'buttons-title-' + index} className={st.item}>
                <TableBtn onClick={addPack} name={'add'}>add</TableBtn>
            </div>
        ),
        render: (dataItem: CardPackType, modelIndex, dataIndex, loading) => (
            <div key={'buttons-cell-' + dataItem._id} className={st.item}>
                <TableBtn onClick={() => deletePack(dataItem._id)}>delete</TableBtn>
                <TableBtn onClick={() => updatePack(dataItem._id)}>update</TableBtn>

            </div>
        )
    },

];
