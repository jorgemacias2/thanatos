import React from "react";
import { Modal } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';

function LoginForm({ show, onHideModal }) {
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
                      <strong>Sign in</strong>
                    </h3>
                  </div>
                  <MDBInput
                    label="Your email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    group
                    type="password"
                    validate
                    containerClass="mb-0"
                  />
                  <p className="font-small blue-text d-flex justify-content-end pb-3">
                    <a href="#!" className="blue-text ml-1">
                      Forgot Password?
                    </a>
                  </p>
                  <div className="text-center mb-3">
                    <MDBBtn
                      type="button"
                      gradient="blue"
                      rounded
                      className="btn-block z-depth-1a"
                    >
                      Sign in
                    </MDBBtn>
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                    or Sign in with:
                  </p>
                  <div className="row my-3 d-flex justify-content-center">
                    <MDBBtn color="indigo" social="fb">
                      <MDBIcon fab icon="facebook-f" className="pr-1" />{" "}
                      Facebook
                    </MDBBtn>
                    <MDBBtn color="danger" social="gplus">
                      <MDBIcon fab icon="google-plus-g" className="pr-1" />{" "}
                      Google +
                    </MDBBtn>
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

export default LoginForm;
