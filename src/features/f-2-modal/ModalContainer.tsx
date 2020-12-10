import React, {ChangeEvent, useState} from 'react';
import {MyInput} from '../../main/common/myComponent/myInput/MyInput';
import {MyModal} from '../../main/common/modal/MyModal';

type ContainerType = {
    isOpen: boolean
    closeModal: () => void
    title: string
    changePack: (value: string, value2?: string) => void
    buttonName: string
    updateAnswer?:string
}
const ModalContainer: React.FC<ContainerType> = ({
                                                     isOpen,
                                                     closeModal,
                                                     title,
                                                     changePack,
                                                     buttonName,
                                                     updateAnswer

                                                 }) => {

    const [itemName, setPackName] = useState('');
    const [updateItem, setUpdateItem] = useState(updateAnswer);
    debugger



    const handleSubmit = () => {
        changePack(itemName, updateItem);
        setPackName('');
        setUpdateItem('');
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
                        <div>
                            <MyInput onChange={updateInputChange} type={'text'} value={updateItem}
                                     placeholder='Enter Title..'/>
                            {/*{updateItem.length < 2 ? 'The length of the deck name must be at least 2 characters' : null}*/}
                        </div>
                    </div> : null}
            </MyModal>
            }
        </>
    );
};
export default ModalContainer;
