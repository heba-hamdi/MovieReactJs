import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Item2 } from '../Item/Item';
import Loading from '../Loading/Loading';



export default function People() {
  const [People, setPeople] = useState([]);


  let getData = async (mediaType, setFun) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=458895295ae5e0e4fa07588463fec7b3`);
    setFun(data.results)
    // console.log(Movies)
  }

  useEffect(() => {
      getData('person', setPeople)

  }, []);
  return (
    <div>
     <h1 className='m-4'>Celebreties</h1>
        {People.length>0?<div className="container">
        <div className="row mt-5">    
           {People.map((value, index)=>{return <Item2 key={index} data={value}/>})}
        </div>
        </div>:<Loading/>}
         
    </div>
  )
}
