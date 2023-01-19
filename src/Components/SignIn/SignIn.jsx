import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { axiosPost } from '../Api/Api';
import '../SignUp/SignUp.css';


export default function Signin() {

  let [Loading, setLoading] = useState(true);
  let [ErrorMsg, setErrorMsg] = useState("");
  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    email: "",
    password: ""
  })



  function getValue({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value
    })

    console.log(formData);

  }


  async function sendData(e) {
    e.preventDefault();
    setLoading(false);
    let response = await axiosPost(formData, "signin");
    console.log(response);
    if (response.message == 'success') {
        localStorage.setItem('token', response.token);
        navigate('/home')
    } else {
        setLoading(true);
        setErrorMsg(response.errors)       }
}


  return (
    <>
      <h1>Registeration Form</h1>
      <form onSubmit={sendData} className='myForm mt-5'>
        {ErrorMsg ? <div className="alert alert-danger">{ErrorMsg?.message}</div>
          : ""}
        <label htmlFor="email">Email</label>
        <input onChange={getValue} type="email" className='form-control my-3' name='email' id='email' />
        <label htmlFor="password">Password</label>
        <input onChange={getValue} type="password" className='form-control my-3' name='password' id='password' />
        <button className='btn btn-primary float-end'>{Loading ? "Signin" : <i className="fas fa-spinner fa-spin"></i>}</button>
      </form>
    </>
  )
}