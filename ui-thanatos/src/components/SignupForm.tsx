import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';


function SignupForm () {
    return (
        <MDBContainer>
        <MDBRow>
            <MDBCol md="6">
            <form>
                <p className="h4 text-left mb-4">Sign up</p>
                <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                    success="right" />
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                    success="right" />
                <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                    error="wrong" success="right" />
                <MDBInput label="Your password" icon="lock" group type="password" validate />
                </div>
                <div className="text-center">
                <MDBBtn color="primary">Register</MDBBtn>
                </div>
            </form>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    );
};

export default SignupForm;
