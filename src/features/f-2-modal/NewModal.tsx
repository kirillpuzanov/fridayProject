import React from 'react';
import Portal from './Portal';
import st from './modal.module.css';

type ModalType = {
    title: string
    isOpen: boolean
    onCancel: () => void
    onSubmit: () => void
    children: any

}


export const ModalTwo: React.FC<ModalType> = ({title, isOpen, onCancel, onSubmit, children}) => {
    return (
        <>
            {isOpen && <Portal>
                <div className={st.modalOverlay}>
                    <div className={st.modalWindow}>
                        <div className={st.modalHeader}>
                            <div className={st.modalTitle}>{title}</div>
                            <button onClick={onCancel}>Close</button>
                        </div>
                        <div className={st.modalBody}>
                            {children}
                        </div>
                        <div className={st.modalFooter}>
                            <button onClick={onCancel}>Close</button>
                            <button onSubmit={onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </Portal>
            }
        </>
    );
};

ModalTwo.defaultProps = {
    title: 'ModalWindow',
    isOpen: false,
    onCancel: () => {
    },
    onSubmit: () => {
    },
    children: null
};