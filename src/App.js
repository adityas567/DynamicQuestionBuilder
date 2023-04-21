import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ValidationForm from './components/ValidationForm'

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <div className="App">
      <h1>Hi,Welcome To Forms Quiz App</h1>
      <Button variant="primary" onClick={handleShow}>
        Open Form
      </Button>
      <Modal show={show} onHide={handleClose} size='xl' >
        <Modal.Header closeButton>
          <Modal.Title>QUIZ FORM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ValidationForm/>
        </Modal.Body>
      </Modal>

    </div>
    </>
  );
  
}

export default App;
