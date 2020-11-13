import React from 'react';
import style from './pnf.module.css'



export const PNF:React.FC = ()=> {

    return <section className={style.pnf}>
        <div className={style.pnf_error}> 404 </div>
        <p className={style.pnf_descr}>Sorry, Page not Found...</p>
    </section>
}