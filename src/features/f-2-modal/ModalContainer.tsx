import React, {ChangeEvent, useEffect, useState} from 'react';
import Modal from './Modal';
import {MyInput} from '../../main/common/myComponent/myInput/MyInput';
import {useDispatch} from 'react-redux';
import {addPack} from '../f-1-all/f-2_PacksTable/f-2_bll/packs-reducer';

type ContainerType = {
    isOpen: boolean
    closeModal: () => void
}


export const ModalContainer: React.FC<ContainerType> = ({isOpen, closeModal}) => {
    const dispatch = useDispatch();
    const [packName, setPackName] = useState('');
    useEffect(() => {
        setPackName(packName);
    }, [packName]);
    const handleSubmit = () => {
        dispatch(addPack(packName));
        setPackName('');
        closeModal();
    };
    const handleCancel = () => {
        closeModal();
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value);
    };

    return (
        <>
            {isOpen &&
            <Modal title="Test Dialog window"
                   onCancel={() => {
                       handleCancel();
                   }}
                   onSubmit={handleSubmit}
                   onBlur={() => {
                       handleCancel();
                   }}
            >
                <p>Hello</p>
                <MyInput autoFocus={true} onChange={onStatusChange} type={'text'} value={packName}/>
            </Modal>
            }
        </>
    );
});


export default ModalContainer;
