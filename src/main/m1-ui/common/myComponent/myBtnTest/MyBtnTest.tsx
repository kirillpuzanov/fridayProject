import React from 'react';
import styles from "./MyBtnTest.module.css";

export type myBtnType = {
    name: string
    type?: "button" | "reset" | "submit"
    error?: boolean
    disabled?: boolean
    onClick?: () => void
}

export function MyBtnTest(props: myBtnType) {

    return (
        <div>
            <button
                className={props.error ? `${styles.redBtn} ${styles.btn}` : styles.btn}
                onClick={props.onClick}
                disabled={props.disabled}
                type={props.type}
            > {props.name}
            </button>
        </div>
    )
}




