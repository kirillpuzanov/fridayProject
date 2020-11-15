import React from 'react';
import styles from './MyInput.module.css';


export type myInputType = {
    type: string
    value?: string
    error?: boolean
    autoFocus?: boolean
    placeholder?: string
    onChange: (e: string | React.ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: () => void
    onBlur?: (e: React.FocusEvent<any>) => void
    name?: string
}

export function MyInput(props: myInputType) {

    return (
        <div>
            <input
                className={props.error ? `${styles.inputBase} ${styles.red}` : styles.inputBase}
                onBlur={props.onBlur}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
                placeholder={props.placeholder}
                name={props.name}
            />
        </div>
    )
}






