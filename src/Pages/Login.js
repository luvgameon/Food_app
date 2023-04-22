import React, { useRef, useState } from "react";
import { useNavigate  } from "react-router-dom";
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

  const [noti, setnoti] = useState(true);

  const hanlerSubmit = async (event) => {
    const userdetails = {
      email: emailref.current.value,
      password: passref.current.value,
    };

    event.preventDefault();

    

    emailref.current.value = "";
    passref.current.value = "";

    const response = await axios.post(
      "http://localhost:5000/api/login",
      userdetails
    );
    //    const response =await fetch('http://localhost:5000/api/createuser',{
    //     method:'POST',
    //     header:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({name:userdetails.name,password:userdetails.password,email:userdetails.email,location:userdetails.location})
    //    });

    if (!response) {
      setnoti(false);
    }
    if(response.data.success)
    {
      console.log(response.data.success);
      return navigate("/");
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

            {!noti && <h4 style={{ color: "Red" }}>Incorrect Email or Password</h4>}
            <h5>Don't have an Account ? </h5>
          <div className='d-flex justify-content-center'>

          <Link to='/createuser'><MDBBtn color='info' className='float-right' >Register</MDBBtn></Link>
          </div>
        </MDBCardBody>
        
    
        
      </MDBCard>
    </MDBContainer>
    </>
  );
}

export default Login;
