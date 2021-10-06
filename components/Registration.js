import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Link } from "react-router-dom";
import axios from "axios";


const FormPage = () => {

    const headers= {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
        'Access-Control-Allow-Headers':'true'
     }

    const [username, setUserName] = useState('');
    const [password,setPassword] =useState('');
    const [role,setRole]=useState('Poster');

    const onRegister=()=>{
        axios.post('http://localhost:8090/register', {
            username: username,
            password: password,
            role: role,
          },headers)
          .then(function (response) {
            alert("user Successfully Registered")
          })
    }


return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="User Name" icon="user" group type="email" validate error="wrong" value={username} onChange={(event)=>setUserName(event.target.value)}
            success="right" />
          <MDBInput label="Password" icon="envelope" group type="password" validate error="wrong" value={password} onChange={(event)=>setPassword(event.target.value)}
            success="right" />
          <MDBInput label="Role" icon="lock" group type="text" validate value={role} onChange={(event)=>setRole(event.target.value)} />
        </div>
        <div className="text-center">
          <MDBBtn color="primary" onClick={()=>onRegister()}>Register</MDBBtn>
        </div>
        <div>
            OR</div>
        <Link tag="a" to="/" style={{ backgroundColor: 'white', borderColor: '#ffffff'}} action>Login Now</Link>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;