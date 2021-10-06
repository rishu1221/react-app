import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";



const FormPage = (props) => {
    const [username, setUserName] = useState('');
    const [password,setPassword] =useState('');
    const headers= {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Headers':'true'
     }
  

    const onLogin=(event)=>{
        event.preventDefault();
        console.log("hey")
        props.history.push({
            pathname: '/homepage',
            state: { role: 'poster' }
        });
        
        // axios.post('http://localhost:8090/login', {
        //     username: username,
        //     password: password,
        //   },headers)
        //   .then(function (response) {
        //     if(response.data=="login success")
        //     {window.location='/job-openings'
        //     alert("user Successfully signed")
        //   }
        //   })
    }

return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" onChange={(event)=>setUserName(event.target.value)}
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate onChange={(event)=>setPassword(event.target.value)}/>
          
        </div>
        <div className="text-center">
          <MDBBtn onClick={onLogin}>Login</MDBBtn>
        </div>
        <div>
            OR</div>
        <Link tag="a" to="/register" style={{ backgroundColor: 'white', borderColor: '#ffffff'}} action>Register Now</Link>
      </form>
    </MDBCol>
    
  </MDBRow>

</MDBContainer>
);
};

export default FormPage;