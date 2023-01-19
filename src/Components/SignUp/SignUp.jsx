import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosPost } from '../Api/Api';
import './SignUp.css';
export default function SignUp() {

  let [Loading, setLoading]=useState(true);
  let [ErrorMsg, setErrorMsg]=useState("");
  let navigate=useNavigate();

  let [formData, setFormData]=useState({
    first_name:"",
    last_name:"",
    email:"",
    password:""
})



function getValue({target}){
  setFormData({
    ...formData,
    [target.name]:target.value
  })
 
console.log(formData);

}


async function sendData(e){
  e.preventDefault();
  setLoading(false);
  let response = await axiosPost(formData,'signup');
  console.log(response);
  if(response.message=='success'){
    navigate('/signin')
  }else{
    setLoading (true);
    console.log("failure");
    setErrorMsg(response.errors)
  }
 
}


  return (
    <>
     <h1>Registeration Form</h1>
     <form onSubmit={sendData} className='myForm'>
      {ErrorMsg?      <div className="alert alert-danger">{ErrorMsg?.email?.message}</div>
:""}
        <label htmlFor="first_name">First Name</label>
        <input onChange={getValue} type="text" className='form-control my-3' name='first_name' id='first_name'/>
        <label htmlFor="last_name">Last Name</label>
        <input onChange={getValue} type="text" className='form-control my-3' name='last_name' id='last_name'/>
        <label htmlFor="email">Email</label>
        <input onChange={getValue} type="email" className='form-control my-3' name='email' id='email'/>
        <label htmlFor="password">Password</label>
        <input onChange={getValue} type="password" className='form-control my-3' name='password' id='password'/>
        <button  className='btn btn-primary float-end'>{Loading?"Signup":<i className="fas fa-spinner fa-spin"></i>}</button>
     </form>
    </>
  )
}
