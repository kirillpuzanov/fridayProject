import React from 'react';
import st from './MyModal.module.css';
import TableBtn from '../../m1-ui/common/myComponent/BtnForTable/TableBtn';


type ModalType = {
    title: string
    onCancel: () => void,
    onSubmit: () => void
    itemName: string | undefined
    buttonName: string
}

export const MyModal: React.FC<ModalType> = ({
                                                 title, onCancel, onSubmit, children, itemName, buttonName
                                             }) => {

    return (
        <>
            <div onClick={onCancel} className={st.modalOverlay}></div>
            <div className={st.modalWindow}>
                <div className={st.modalHeader}>
                    <div className={st.modalTitle}>{title}</div>
                </div>
                <div className={st.modalBody}>
                    {children}
                </div>
                <div className={st.modalFooter}>
                    {/*{buttonName !== 'DELETE' ?*/}
                    {/*    <TableBtn onClick={onSubmit} >{buttonName}</TableBtn> :*/}
                    {/*    <TableBtn onClick={onSubmit}>{buttonName}</TableBtn>}*/}
                    <TableBtn onClick={onSubmit}>{buttonName}</TableBtn>
                    <TableBtn onClick={onCancel}>Cancel</TableBtn>
                </div>
            </div>
        </>
    );
};



