import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addPack} from '../f-1-all/f-2_PacksTable/f-2_bll/packs-reducer';
import {MyInput} from '../../main/common/myComponent/myInput/MyInput';
import {MyModal} from '../../main/common/modal/MyModal';

type ContainerType = {
    isOpen: boolean
    closeModal: () => void
}


export const ModalContainer: React.FC<ContainerType> = ({isOpen, closeModal}) => {
    const dispatch = useDispatch();
    const [packName, setPackName] = useState('');

    const handleSubmit = () => {
        dispatch(addPack(packName));
        setPackName('');
        closeModal();
    };
    const handleCancel = () => {
        closeModal();
    };
    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value);
    };

    return (
        <>
            {isOpen &&
            <MyModal title="Test Dialog window"
                   onCancel={handleCancel}
                   onSubmit={handleSubmit}
                   packName={packName}
            >
               <MyInput onChange={inputChange} type={'text'} value={packName} placeholder='Enter Title..'/>
            </MyModal>
            }
        </>
    );
};


