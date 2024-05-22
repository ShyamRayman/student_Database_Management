import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./DeleteConfirmationDialog.css"

interface DeleteConfirmationDialogProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({ show, onHide, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this student?
      </Modal.Body>
      <Modal.Footer>
        

      <Button variant="success" onClick={onConfirm} className='buttonDelete'>
          Delete
      </Button>

      <Button variant="danger" onClick={onHide} className='buttonCancel'>
          Cancel
        </Button>
        
        
        
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationDialog;
