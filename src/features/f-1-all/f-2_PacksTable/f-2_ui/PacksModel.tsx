import React from 'react';
import st from './Packs.module.css';
import {CardPackType} from '../f-2_bll/cardPacks-reducer';
import {TableModelType} from '../../../../main/common/table/Table';
import TableBtn from '../../../../main/common/myComponent/BtnForTable/TableBtn';


export const packsModel = (
    addPack: () => void,
    deletePack: (packId: string) => void,
    updatePack: (packId: string) => void,
): TableModelType[] => [
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
                <TableBtn onClick={() => deletePack(dataItem._id)} name='delete'>delete</TableBtn>
                <TableBtn onClick={() => updatePack(dataItem._id)} name='update'>update</TableBtn>
            </div>
        )
    },

];