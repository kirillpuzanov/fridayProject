import React from 'react';
import { v1 } from 'uuid';
import {CardPackType} from '../../../../../features/f-2-cards/c-1-card-paks/packs3-dal/cardPackAPI';
import CardPack from './cardPack/cardPack';



type CardsPackType = {
    cardPacks: Array<CardPackType>
}



const CardPacks:React.FC<CardsPackType> = (props) => {
    return (
        <>
            {props.cardPacks.map((cardPack:CardPackType)=> <CardPack
                key={v1()}
                _id={''}
                user_id={''}
                name={''}
                path={''}
                cardsCount={25}
                grade={0}
                shots={0}
                rating={0}
                created={''}
                updated={''}
                __v={0}
            type={'pack'}/>)}
        </>
    );
};

export default CardPacks;