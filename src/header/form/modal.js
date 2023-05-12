import React from 'react';
import Modal from 'react-modal';
import Hireme from './Hireme';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const MyModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
    <button onClick={closeModal} className=''>Kapat</button>
        <Hireme />
      
    </Modal>
  );
};

export default MyModal;