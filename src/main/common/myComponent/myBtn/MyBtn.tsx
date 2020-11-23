import React from 'react';
import styles from "./MyBtn.module.css";

export type myBtnType = {
    name: string
    type?: "button" | "reset" | "submit"
    error?: boolean
    disabled?: boolean
    onClick?: () => void
}

export function MyBtn(props: myBtnType) {

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




