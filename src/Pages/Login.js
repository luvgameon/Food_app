import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

function Login() {
  let navigate = useNavigate();
  const emailref = useRef("");
  const passref = useRef("");
  const [msg, setmsg] = useState("");

  const [noti, setnoti] = useState(true);

  const hanlerSubmit = async (event) => {
    const userdetails = {
      email: emailref.current.value,
      password: passref.current.value,
    };

    event.preventDefault();

    emailref.current.value = "";
    passref.current.value = "";
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        userdetails
      );
      if (response.data.success) {
        console.log(response);
        localStorage.setItem("authToken",response.data.authToken);
        return navigate("/");
      }
    } catch (error) {
      console.log("err", error.response.data.errors);
      setmsg(error.response.data.errors);
      setnoti(false);
    }
  };
  return (
    <>
      <Header />
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">Login account</h2>
            <form onSubmit={hanlerSubmit}>
              {/* <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='name' type='text' ref={nameref} /> */}
              <MDBInput
                wrapperClass="mb-4"
                label="Your Email"
                size="lg"
                id="email"
                type="email"
                ref={emailref}
                required
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="password"
                type="password"
                ref={passref}
                required
              />
              {/* <MDBInput wrapperClass='mb-4' label='location' size='lg' id='location' type='text' ref={locationref}/> */}
              {/* <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div> */}
              <MDBBtn
                className="mb-4 w-100 gradient-custom-4"
                size="lg"
                type="submit"
              >
                Login
              </MDBBtn>
            </form>

            {!noti && <h4 style={{ color: "Red" }}>{msg}</h4>}
            <h5>Don't have an Account ? </h5>
            <div className="d-flex justify-content-center">
              <Link to="/createuser">
                <MDBBtn color="info" className="float-right">
                  Register
                </MDBBtn>
              </Link>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default Login;
