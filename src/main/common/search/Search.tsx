import React from 'react';
import {MyInput} from '../myComponent/myInput/MyInput';
import {MyBtn} from '../myComponent/myBtn/MyBtn';
import {MyMultiRange} from '../myComponent/MyMultiRange/MyMultiRange';
import style from './Search.module.css'


type SearchType = {
    onSearch: () => void
    onShowAll: ()=> void
    //multiRange
    valueMultiRAnge: number[]
    domain: number[]
    step: number
    //input
    onChange: (searchName: string) => void
    onChangeMultiRange: (value: number[]) => void
    inputValue: string
}

export const  Search = (props: SearchType) => {

    const {onSearch, valueMultiRAnge, domain, step, onChange, onChangeMultiRange,onShowAll,inputValue} = props;
    const onInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value);


    return (
        <div className={style.search}>
            <MyInput type={'text'} onChange={onInputSearch}
                     placeholder={'title for search'} value={inputValue}
            />

            <MyMultiRange
                domain={domain}
                step={step}
                mode={2}
                values={valueMultiRAnge}
                onChange={onChangeMultiRange}
            />
            <div  className={style.search_btn}>
                <MyBtn  name={'Search'} onClick={onSearch}/>
                <MyBtn  name={'Show All'} onClick={onShowAll}/>
            </div>
        </div>
    )
}

