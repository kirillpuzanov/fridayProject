import React, {ChangeEvent, useEffect, useState} from 'react';
import {MyInput} from '../../main/common/myComponent/myInput/MyInput';
import {MyModal} from '../../main/common/modal/MyModal';
import {MyTextArea} from '../../main/common/myComponent/myTextArea/MyInput';

type ContainerType = {
    isOpen: boolean
    closeModal: () => void
    title: string
    changePack: (value?: string, value2?: string) => void
    buttonName: string
    updateAnswer?: string
    updateItemName?: string
}
const ModalContainer: React.FC<ContainerType> = ({
                                                     isOpen,
                                                     closeModal,
                                                     title,
                                                     changePack,
                                                     buttonName,
                                                     updateAnswer,
                                                     updateItemName

                                                 }) => {

    const [itemName, setItemName] = useState<string | undefined>('');
    const [updateItem, setUpdateItem] = useState<string | undefined>('');
    useEffect(() => {
        setUpdateItem(updateAnswer);
    }, [updateAnswer]);
    // useEffect(() => {
    //     return () => {
    //         setUpdateItem('');
    //     };
    // }, []);
    useEffect(() => {
        setItemName(updateItemName);
    }, [updateItemName]);
    // useEffect(() => {
    //     return () => {
    //         setItemName('');
    //     };
    // }, []);


    const handleSubmit = () => {
        changePack(itemName, updateItem);
        setItemName('');
        setUpdateItem('');
        closeModal();
    };

    const handleCancel = () => {
        closeModal();
    };
    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItemName(e.currentTarget.value);
    };
    const updateInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
                        {itemName && itemName.length < 2 ? 'The length of the deck name must be at least 2 characters' : null}
                        <div>
                            <MyTextArea onChange={updateInputChange} value={updateItem}/>
                            {updateItem && updateItem.length < 3 ? 'The length of the deck name must be at least 2 characters' : null}
                        </div>
                    </div> : null}

            </MyModal>
            }
        </>
    );
};
;
export default ModalContainer;
