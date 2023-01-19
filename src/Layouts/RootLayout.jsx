import React from 'react'
import { Outlet } from 'react-router-dom'
import Movies from '../Components/Movies/Movies'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
export default function RootLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>      
    </div>
  )
}
