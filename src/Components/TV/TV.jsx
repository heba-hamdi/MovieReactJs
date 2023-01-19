import axios from 'axios';
import React from 'react'
import { Item1 } from '../Item/Item';
import { useEffect , useState } from 'react';
import Loading from '../Loading/Loading';
export default function TV() {
 
  const [TV, setTv] = useState([]);



  let getData=async (mediaType, setFun)=>{
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=458895295ae5e0e4fa07588463fec7b3`);
    setFun(data.results)
    // console.log(Movies)
}
 
useEffect(() => {

  getData('tv', setTv)

  
}, []);
  return (
    <div>
      <h1 className='m-4'>TV Shows</h1>
        {TV.length>0?<div className="container">
        <div className="row mt-5">    
           {TV.map((value, index)=>{return <Item1 key={index} data={value}/>})}
        </div>
        </div>:<Loading/>}
    </div>
  )
}
