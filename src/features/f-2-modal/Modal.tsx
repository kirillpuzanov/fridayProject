import React from 'react';
import st from './Modal.module.css';
import Portal from '../../main/common/portal/Portal';
import TableBtn from '../../main/m1-ui/common/myComponent/BtnForTable/TableBtn';

type ModalType = {
    title: string
    onCancel: () => void,
    onSubmit: () => void
    children: React.ReactNode
    onBlur: () => void

}

const Modal: React.FC<ModalType> = ({
                                        title, onCancel, onSubmit, children,
                                    }) => {

    return (
        <>
            <Portal>
                <div onBlur={onCancel}  className={st.modalOverlay}>
                    <div className={st.modalWindow}>
                        <div className={st.modalHeader}>
                            <div className={st.modalTitle}>{title}</div>
                        </div>
                        <div className={st.modalBody}>
                            {children}
                        </div>
                        <div className={st.modalFooter}>
                            <TableBtn onClick={onSubmit}>Submit</TableBtn>
                            <TableBtn onClick={onCancel}>Cancel</TableBtn>
                        </div>
                    </div>
                </div>
            </Portal>
        </>
    );
};


export default Modal;
