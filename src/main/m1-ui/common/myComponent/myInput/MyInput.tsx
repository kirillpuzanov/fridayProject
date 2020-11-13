import React, {ChangeEvent, FocusEvent, KeyboardEvent} from 'react';
import styles from "./MyInput.module.css";


export type myInputType = {
    type: string
    value: string
    error?: boolean
    autoFocus?: boolean
    placeholder?: string
    onChange: (value: string) => void
    onKeyPress?: () => void
    onBlur?: () => void
}

export function MyInput(props: myInputType) {

    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (props.onKeyPress && e.charCode === 13) {
            props.onKeyPress()
        }
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value);
    return (
        <div>
            <input
                className={props.error ? `${styles.inputBase}${styles.red}` : styles.inputBase}
                onBlur={props.onBlur}
                type={props.type}
                value={props.value}
                onChange={handleChange}
                onKeyPress={onPressEnter}
                placeholder={props.placeholder}
            />
        </div>
    )
}






