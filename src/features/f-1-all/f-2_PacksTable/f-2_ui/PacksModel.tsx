import React from 'react';
import st from './Packs.module.css';
import {PackType} from '../f-2_bll/packs-reducer';
import {TableModelType} from '../../../../main/common/table/Table';
import TableBtn from '../../../../main/common/myComponent/BtnForTable/TableBtn';
import LinkNya from '../../../../main/common/myComponent/link/LinkNya';
import {CARDS_PATH, LEARN_PATH} from '../../../../main/m1-ui/routes/Routes';

export const packsModel = (
    addModalPack: () => void,
    deletePack: (packId: string) => void,
    updatePack: (packId: string) => void,
): TableModelType[] => [
    {
        title: (index) => (
            <div key={'name-title-' + index} className={st.item}>Name</div>
        ),
        render: (dataItem: PackType) => (
            <div key={'name-cell-' + dataItem._id} className={st.item}>
                {dataItem.name}
            </div>
        )
    },
    {
        title: (index) => (
            <div key={'cardsCount-title-' + index} className={st.item}>cardsCount</div>
        ),
        render: (dataItem: PackType) => (
            <div key={'cardsCount-cell-' + dataItem._id} className={st.item}>
                {dataItem.cardsCount}
            </div>
        )
    },
    {
        title: (index) => (
            <div key={'updated-title-' + index} className={st.item}>updated</div>
        ),
        render: (dataItem: PackType) => (
            <div key={'updated-cell-' + dataItem._id} className={st.item}>
                {dataItem.updated.slice(5, 16)}
            </div>
        )
    },
    {
        title: (index) => (
            <div key={'url-title-' + index} className={st.item}>url</div>
        ),
        render: (dataItem: PackType) => (
            <div key={'url-cell-' + dataItem._id} className={st.item}>
                {dataItem.deckCover}
            </div>
        )
    },
    {
        title: (index) => (
            <div key={'buttons-title-' + index} className={st.item}>
                <TableBtn onClick={() => {
                    addModalPack();
                }} name={'add'}>add</TableBtn>
            </div>
        ),
        render: (dataItem: PackType) => (

            <div key={'buttons-cell-' + dataItem._id} className={st.item}>
                <TableBtn onClick={() => deletePack(dataItem._id)} name='delete'>delete</TableBtn>
                <TableBtn onClick={() => updatePack(dataItem._id)} name='update'>update</TableBtn>
                <LinkNya to={CARDS_PATH + '/' + dataItem._id}>cards</LinkNya>
                <LinkNya to={LEARN_PATH + '/' + dataItem._id}>learn</LinkNya>
            </div>
        )
    },

];
