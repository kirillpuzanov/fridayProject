import React from 'react';
import style from './pnf.module.css'
import {PackPageTest} from '../../features/f-1-cards/c-1-packs/p1-ui/PackPageTest';



export const TestComponent:React.FC = ()=> {

    return <section className={style.pnf}>

        <p className={style.pnf_descr}>TestComponent</p>
        <hr/>

        <PackPageTest/>

        <hr/>



    </section>
}