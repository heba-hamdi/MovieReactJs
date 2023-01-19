import React from 'react';
import './ItemDetails.css';
import {getDetails} from '../Api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {

    let [Details, setDetails]=useState('');    
    let x=useParams();
    console.log(x.id)


    async function getData(){
        const details= await getDetails(x.id);
        console.log(details);
        setDetails(details)
        console.log(Details);     

    }


    useEffect(() => {
        getData()  
    }, []);


    return (
        <div className='container'>
           <div className='row'>
                <div className='col-md-5'>
                   <img src= {`https://image.tmdb.org/t/p/w500${Details.poster_path}`} className="w-100" />            
                </div>
                <div className='col-md-7'>
                    <h2>{Details.original_title}</h2>
                    {Details.genres?.map((item)=><button className='btn btn-info btn-sm text-white fw-bold mt-3 ms-2'>{item.name}</button>)}
                    <ul className='mt-5'>
                        <li><span className='fw-bold'>Votes : </span> {Details.vote_average}</li>
                        <li><span className='fw-bold'>Revenue : </span>{Details.revenue}</li>
                        <li><span className='fw-bold'>Release Date : </span> {Details.release_date}</li>
                    </ul>
                    <h4 className='fw-bold mt-5'>Overview</h4>
                    <p className='text-white fs-5'>
                        {Details.overview}
                    </p>
                </div>
           </div>          
        </div>
    );
}

export default ItemDetails;
