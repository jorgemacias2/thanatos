import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

function LoginForm () {
    return(
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
    );
}

export default LoginForm