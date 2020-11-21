import React from 'react';
import {CardPackType} from '../../../../m3-dal/cardPackAPI';
import CardPack from './cardPack/cardPack';



type CardsPackType = {
    cardPacks: Array<CardPackType>
}



const CardPacks:React.FC<CardsPackType> = (props) => {
    return (
        <>
            {props.cardPacks.map((cardPack:CardPackType)=> <CardPack
                _id={''}
                user_id={''}
                name={''}
                path={''}
                cardsCount={1}
                grade={1}
                shots={1}
                rating={1}
                created={''}
                updated={''}
                __v={''}/>)}
        </>
    );
};

export default CardPacks;