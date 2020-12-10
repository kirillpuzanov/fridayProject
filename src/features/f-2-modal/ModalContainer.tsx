import React, {ChangeEvent, useState} from 'react';
import {MyInput} from '../../main/common/myComponent/myInput/MyInput';
import {MyModal} from '../../main/common/modal/MyModal';

type ContainerType = {
    isOpen: boolean
    closeModal: () => void
    title: string
    changePack: (value: string,  value2: string) => void
    itemId: string
    buttonName: string
}
const ModalContainer: React.FC<ContainerType> = ({
                                                     isOpen,
                                                     closeModal,
                                                     title,
                                                     changePack,
                                                     itemId, buttonName

                                                 }) => {

    const [itemName, setPackName] = useState('');
    const [updateItem, setUpdateItem] = useState('');


    const handleSubmit = () => {
        changePack(itemName, updateItem);
        setPackName('');
        closeModal();
    };

    const handleCancel = () => {
        closeModal();
    };
    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPackName(e.currentTarget.value);
    };
    const updateInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUpdateItem(e.currentTarget.value);
    };

    return (
        <>
            {isOpen &&
            <MyModal title={title}
                     onCancel={handleCancel}
                     onSubmit={handleSubmit}
                     itemName={itemName}
                     buttonName={buttonName}
            >
                {buttonName !== 'DELETE' ?
                    <div>
                        <MyInput onChange={inputChange} type={'text'} value={itemName} placeholder='Enter Title..'/>
                        {itemName.length < 2 ? 'The length of the deck name must be at least 2 characters' : null}
                    </div>
                    : null}
                {buttonName !== 'DELETE' ?
                    <div>
                        <MyInput onChange={updateInputChange} type={'text'} value={updateItem}
                                 placeholder='Enter Title..'/>
                        {updateItem.length < 2 ? 'The length of the deck name must be at least 2 characters' : null}
                    </div>
                    : null}
            </MyModal>
            }
        </>
    );
};
export default ModalContainer;
