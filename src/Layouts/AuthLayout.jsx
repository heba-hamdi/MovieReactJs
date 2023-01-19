import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

export default function AuthLayout() {
  return (
    <div>
      <Navbar auth={true}/>
      <div className="w-50 m-auto my-5">
      <Outlet/>
      </div>
      
   
    </div>
  )
}
