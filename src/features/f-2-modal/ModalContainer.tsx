import React, {ChangeEvent, useState} from 'react';
import {MyInput} from '../../main/common/myComponent/myInput/MyInput';
import {MyModal} from '../../main/common/modal/MyModal';

type ContainerType = {
    isOpen: boolean
    closeModal: () => void
    title: string
    changePack: (value: string, packId?: string) => void
    packId: string
    buttonName: string
}


const ModalContainer: React.FC<ContainerType> = ({
                                                     isOpen,
                                                     closeModal,
                                                     title,
                                                     changePack,
                                                     packId, buttonName

                                                 }) => {

    const [packName, setPackName] = useState('');


    const handleSubmit = () => {
        changePack(packName, packId);
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
            <MyModal title={title}
                     onCancel={handleCancel}
                     onSubmit={handleSubmit}
                     packName={packName}
                     buttonName={buttonName}
            >
                {buttonName !== 'DELETE' ?
                    <div>
                        <MyInput onChange={inputChange} type={'text'} value={packName} placeholder='Enter Title..'/>
                        {packName.length < 2 ? 'The length of the deck name must be at least 2 characters' : null}
                    </div>
                    : null}
            </MyModal>
            }
        </>
    );
}
export default ModalContainer;
