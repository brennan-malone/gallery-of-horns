import React from 'react';
import Modal from 'react-bootstrap/Modal'
import './SelectedBeast.css'

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>{this.props.selectedBeast}</Modal.Header>
          <Modal.Body as="modal-body"><img src={this.props.selectedImg} alt="the beast"></img></Modal.Body>
          <Modal.Footer>{this.props.selectedDescription}</Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;