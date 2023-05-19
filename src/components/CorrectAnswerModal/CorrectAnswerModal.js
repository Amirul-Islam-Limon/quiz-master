import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CorrectAnswerModal.css'


const CorrectAnswerModal = ({modalButton,correctAnswer,question}) => {
    const [modalShow, setModalShow] = modalButton;

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className='modal-tittle' id="contained-modal-title-vcenter">
                {question}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>The Correct Answer is :</h5>
              <p className='modal-body-content'>
                {correctAnswer}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default CorrectAnswerModal;