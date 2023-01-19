import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

export  function Item1(props) {
console.log(props)
  let {title, vote_average,poster_path, overview, name, popularity, profile_path, id}=props.data;
// console.log(poster_path)
  return (
    <>
     <div className="col-md-2">
      <div className="box-1">
        
      </div>
        <div className="item position-relative">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="w-100 mb-1" alt="" />       
          <Link to={`/details/${id}`}>
            <div className="overlay">
            <p className='text-white'>{overview.split(" ").splice(0,10).join(" ")}</p>
          </div></Link>
          <div className="vote p-2">{vote_average.toFixed(1)}</div>
        </div>
        <h6 className='my-4'>{title}</h6>
        <h6 className='my-4'>{name}</h6>
       
     </div>
    </>
  )
}
export  function Item2(props) {
console.log(props)
  let { name, popularity, profile_path, known_for_department}=props.data;
// console.log(poster_path)
  return (
    <>
     <div className="col-md-2">
      <div className="box-1">
        
      </div>
        <div className="item position-relative">
          <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} className="w-100 mb-1" alt="" />       
          <div className="overlay">
           {/* <p className='text-white'>{known_for_department}</p> */}
          
          <div className="vote p-2">{popularity.toFixed(1)}</div>
          </div>
         </div>
        <h6 className='my-4'>{name}</h6>
       
     </div>
    </>
  )
}
