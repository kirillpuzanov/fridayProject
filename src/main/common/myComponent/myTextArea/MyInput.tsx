import React from 'react';
import styles from './MyTextArea.module.css';


export type myInputType = {
    value?: string
    error?: boolean
    autoFocus?: boolean
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onKeyPress?: () => void
    onBlur?: (e: React.FocusEvent<any>) => void
}

export const MyTextArea: React.FC<myInputType> = ({error, onBlur, onChange, onKeyPress, placeholder, value}) => {

    return (
        <div>
            <textarea
                className={error ? `${styles.inputBase} ${styles.red}` : styles.inputBase}
                onBlur={onBlur}
                onChange={onChange}
                onKeyPress={onKeyPress}
                placeholder={placeholder}
                value={value}
            >


            </textarea>
        </div>
    );
};






