import React,{useRef,useState} from 'react';
import axios from 'axios';
import './Signup.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';


function Signup() {
    const nameref = useRef("");
    const emailref = useRef("");
    const passref = useRef("");
    const locationref = useRef("");
    const [noti, setnoti] = useState();
   const [msg, setmsg] = useState('');
   
   
    const hanlerSubmit=async(event)=>{
        const userdetails= {

            name: nameref.current.value,
            email: emailref.current.value,
            password: passref.current.value,
            location: locationref.current.value,
    
    
        }
     
        event.preventDefault();
       
        console.log(userdetails);
       
        nameref.current.value="";
        emailref.current.value="";
        passref.current.value="";
        locationref.current.value="";
       
       const response= await axios.post('http://localhost:5000/api/createuser', userdetails);
    //    const response =await fetch('http://localhost:5000/api/createuser',{
    //     method:'POST',
    //     header:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({name:userdetails.name,password:userdetails.password,email:userdetails.email,location:userdetails.location})
    //    });

      
       
       
      

       if(!response)
       {
        
       setnoti(false);
       }
       else{
       setnoti(true);
       }
      


    }
    return (<>
      <Header/>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <form onSubmit={hanlerSubmit}>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='name' type='text' ref={nameref} />
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='email' type='email' ref={emailref} required/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='password' type='password' ref={passref}required/>
          <MDBInput wrapperClass='mb-4' label='location' size='lg' id='location' type='text' ref={locationref}/>
          {/* <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div> */}
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit'>Register</MDBBtn>
          </form>
        {noti && <h4 style={{color:"green"}}>Sign Up SuccessFul Login Now</h4>}
        {!noti && <h4 style={{color:"Red"}}>{msg}</h4>}
          <h5>Alread have an Account ? </h5>
          <div className='d-flex justify-content-center'>

          <Link to='/login'><MDBBtn color='info' className='float-right' >Login</MDBBtn></Link>
          </div>
        </MDBCardBody>
        
    
        
      </MDBCard>
    </MDBContainer>
    
    </>
  );
}

export default Signup;