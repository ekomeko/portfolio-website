import './header.css'
import Sidebar from './headercomponents/Sidebar'
import Logo from './headercomponents/Logo'
import MyModal from './form/modal'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Header =() =>{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
 return(
 <>
 <div className='header'>
    <div className='header__left'>
        <Sidebar/>
        
        <Logo/>
        
    </div>
    <div className='header__right'>
    <div>
      <Button  variant='outline-dark' onClick={openModal}>Hire Me</Button>
      <MyModal isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
    
    </div>
 </div>
 </>
 )
}


export default Header;