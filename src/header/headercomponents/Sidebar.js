
import { AiOutlineMenu } from 'react-icons/ai';
import './sidebar.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



   return( 
        <>
      <Button variant='outline-dark' onClick={handleShow}>
      <AiOutlineMenu/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>EKIN</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h5>WhoAmI</h5>
        <p>I am 19 years old Computer Engineering student.It's my first year in university</p>
        <p>I love explore new technologys and create new things</p>
        <p>I made this portfolio website with using React Bootstrap Javascript Html CSS And some react packages</p>
        <p>My contacts:</p>
        <a></a>
        </Offcanvas.Body>
      </Offcanvas>
    </>

   );
 
}


export default Sidebar;