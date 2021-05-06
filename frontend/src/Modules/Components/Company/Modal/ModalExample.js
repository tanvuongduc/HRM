import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, FormGroup, Label } from 'reactstrap';

const ModalExample = (props) => {
  const item = props.item

  const [modal, setModal] = useState(false);
  const [data, setdata] = useState('')
  const handerOnchange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }

  const addDocument = (event) => {
    event.preventDefault();

  }

  const {
    buttonLabel,
    className
  } = props;

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" style={{ float: 'right' }} onClick={toggle}>{buttonLabel}ADD</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={addDocument}>
            <FormGroup>
              <Label>TITLE</Label>
              <Input type='text' name='title' onChange={handerOnchange} />
            </FormGroup>
            <FormGroup>
              <Label>DESCSCRIP</Label>
              <Input type='textarea' name='desc' onChange={handerOnchange} />
            </FormGroup>
            <Button color="primary" onClick={toggle} type="submit">Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalExample;