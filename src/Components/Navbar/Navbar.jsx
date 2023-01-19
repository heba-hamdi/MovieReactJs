import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


export default function Navbar(props) {
  let navigate=useNavigate();
  let logout=()=>{
    localStorage.removeItem('token');    
    navigate('/signin')
}
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light navbar-dark shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="home"><h3>Noxe</h3></NavLink>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">

              {!props.auth ? <>    <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/movies">Movies</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tv">TV Shows</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/people">People</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                </> : <> <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">SignIn</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                </li> </>}
            </ul>

            <ul className="navbar-nav mt-2 mt-lg-0">
              {!props.auth ? <> <li className="nav-item">
              <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={logout}>Logout</button>
                                
              </li></> : ""}


            </ul>

          </div>
        </div>
      </nav>


    </div>
  )
}
