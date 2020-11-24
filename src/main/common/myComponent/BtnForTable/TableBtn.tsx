import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './TableBtn.module.css'


export type ButtonsPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { error?: boolean };

const TableBtn: React.FC<ButtonsPropsType> = React.memo((
    {        ...props    }) => {
    return <button className={props.error ? `${styles.redBtn} ${styles.btn}` : styles.btn} {...props}/>;
});

export default TableBtn;
