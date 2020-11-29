import React from 'react';
import PropTypes from 'prop-types';
import  st from './Modal.module.css'


import Portal from '../portal/Portal';
import Icon from '../icon/Icon';

const Modal:React.FC<any> = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className={st.modalOverlay}>
            <div className={st.modalWindow}>
              <div className={st.modalHeader}>
                <div className={st.modalTitle}>{title}</div>
                <button  onClick={onCancel}>cancel</button>
              </div>
              <div className={st.modalBody}>
                {children}
              </div>
              <div className="modalFooter">
                <button onClick={onCancel} >Cancel</button>
                <button onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

export default Modal;
