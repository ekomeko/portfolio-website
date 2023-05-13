import React from 'react';
import Modal from 'react-modal';
import Hireme from './Hireme.js';
import Button from 'react-bootstrap/Button';

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


const closebuttoncontainer = {
  
    position: 'absolute',
    right: '10px',
    top: '10px',

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
    <div style={closebuttoncontainer}>
    <Button variant='outline-dark' onClick={closeModal} className=''>Kapat</Button>
    </div>
        <Hireme />
      
    </Modal>
  );
};

export default MyModal;