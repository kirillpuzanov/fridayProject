import React, {ChangeEvent} from 'react';
import {MyInput} from '../../main/common/myComponent/myInput/MyInput';
import {MyModal} from '../../main/common/modal/MyModal';

type ContainerType = {
    isOpen: boolean
    closeModal: () => void
    title: string
    changePack: () => void
    setPackName: (value: string) => void
    packName: string
}


export const ModalContainer: React.FC<ContainerType> = ({
                                                            isOpen,
                                                            closeModal,
                                                            title,
                                                            changePack,
                                                            setPackName,
                                                            packName
                                                        }) => {

    const handleSubmit = () => {
        changePack();
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
                // packName={packName}
            >
                <MyInput onChange={inputChange} type={'text'} value={packName} placeholder='Enter Title..'/>
            </MyModal>
            }
        </>
    );
};


export default ModalContainer;
