import React from 'react';
import {MyInput} from '../myComponent/myInput/MyInput';
import {MyBtn} from '../myComponent/myBtn/MyBtn';
import {MyMultiRange} from '../myComponent/MyMultiRange/MyMultiRange';
import style from './Search.module.css'


type SearchType = {
    onSearch: () => void
    //multiRange
    valueMultiRAnge: number[]
    domain: number[]
    step: number
    //input
    onChange: (searchName: string) => void
    onChangeMultiRange: (value: number[]) => void
}

export const  Search = (props: SearchType) => {

    const {onSearch, valueMultiRAnge, domain, step, onChange, onChangeMultiRange} = props;
    const onInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value);


    return (
        <div className={style.search}>
            <MyInput type={'text'} onChange={onInputSearch}
                     placeholder={'title for search'}
            />

            <MyMultiRange
                domain={domain}
                step={step}
                mode={2}
                values={valueMultiRAnge}
                onChange={onChangeMultiRange}
            />
            <MyBtn name={'Search'} onClick={onSearch}/>
        </div>
    )
}

