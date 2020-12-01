import React from 'react';
import st from './MyModal.module.css';
import Portal from '../portal/Portal';

type ModalType = {
    title: string
    isOpen: boolean,
    onCancel: () => void,
    onSubmit: () => void
    children: React.ReactNode
}

const MyModal: React.FC<ModalType> = ({
                                          title, isOpen, onCancel, onSubmit, children,
                                      }) => {

    return (
        <>
            {isOpen &&
            <Portal>
                <div className={st.modalOverlay}>
                    <div className={st.modalWindow}>
                        <div className={st.modalHeader}>
                            <div className={st.modalTitle}>{title}</div>
                            <button onClick={onCancel}>cancel</button>
                        </div>
                        <div className={st.modalBody}>
                            {children}
                        </div>
                        <div className="modalFooter">
                            <button onClick={onCancel}>Cancel</button>
                            <button onClick={onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </Portal>
            }
        </>
    );
};


MyModal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {
    },
    onSubmit: () => {
    },
    children: null
};

export default MyModal;
