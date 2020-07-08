import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

function LoginForm() {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
        <MDBContainer>
        <MDBRow>
            <MDBCol md="6">
            <form className="ml-xl-5">
                <p className="h4 text-left mb-4">Sign in</p>
                <div className="grey-text">
                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                    success="right" />
                <MDBInput label="Type your password" icon="lock" group type="password" validate />
                </div>
                <div className="text-center">
                <MDBBtn>Login</MDBBtn>
                </div>
            </form>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
        </Modal>
      </>
    );
  }
  
export default LoginForm;