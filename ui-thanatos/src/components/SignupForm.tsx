import React from "react";
import { Modal } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

function SignupForm({ show, onHideModal }) {
  const handleClose = () => onHideModal(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <MDBContainer className="padding-card">
          <MDBRow>
            <MDBCol md="12">
              <MDBCard>
                <MDBCardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                      <strong>Sign Up</strong>
                    </h3>
                  </div>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="primary">Register</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Modal>
    </>
  );
}

export default SignupForm;
