import React, {KeyboardEvent} from 'react';
import styles from './MyInputTest.module.css';


export type myInputType = {
    type: string
    value: string
    error?: boolean
    autoFocus?: boolean
    placeholder?: string
    onChange: (e: string | React.ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: () => void
    onBlur?: () => void
    name?: string
    disable?: boolean
}

export function MyInputTest(props: myInputType) {

    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (props.onKeyPress && e.charCode === 13) {
            props.onKeyPress();
        }
    };

    return (
        <div>
            <input
                disabled={props.disable}
                className={props.error ? `${styles.inputBase} ${styles.red}` : styles.inputBase}
                onBlur={props.onBlur}
                type={props.type}
                value={props.value}
                onChange={props.onChange}

                onKeyPress={onPressEnter}
                placeholder={props.placeholder}
                name={props.name}
            />
        </div>
    );
}






