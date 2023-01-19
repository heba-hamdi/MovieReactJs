import React from 'react'
import {Item1} from '../Item/Item'
import { useEffect , useState } from 'react';
import axios from 'axios'
import Loading from '../Loading/Loading';

export default function Movies() {
  const [Movies, setMovies] = useState([]);



  let getData=async (mediaType, setFun)=>{
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=458895295ae5e0e4fa07588463fec7b3`);
    setFun(data.results)
    // console.log(Movies)
}
 
useEffect(() => {
  getData('movie', setMovies)

  
}, []);
  return (
    <div>
      <h1 className='m-4'>Movies</h1>
     {Movies.length>0? <div className="container">
        <div className="row">
        
         
          {Movies.map((movie, index)=>{ return <Item1 key={index} data={movie}/>})}
        </div>
      </div>:<Loading/>}
    </div>
  )
}
