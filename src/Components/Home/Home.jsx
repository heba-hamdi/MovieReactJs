import React from 'react'
import { useEffect, useState } from 'react';
import { Item1, Item2 } from '../Item/Item';
import './Home.css';
import {getData} from '../Api/Api'
import Loading from '../Loading/Loading';
import { Offline } from "react-detect-offline";
import Disconnected from '../Disconnected/Disconnected';

export default function Home() {

  const [Movies, setMovies] = useState([]);
  const [TV, setTv] = useState([]);
  const [People, setPeople] = useState([]);




  useEffect(() => {
    getData('movie', setMovies)
    getData('tv', setTv)
    getData('person', setPeople)

  }, []);




  return (
    <div>

      <Offline><Disconnected/></Offline>
      <div className="container">

        {Movies.length > 0 ? <>

          {/* *****************Movies**************** */}
          <div className="row">
            <div className="col-md-4 d-flex justify-content-start flex-column">
              <div className="brdr w-25"></div>
              <h1>Trending <br /> Movies <br /> To Watch Now</h1>
              <p >Most Watched Movies by days</p>
              <div className="brdr"></div>
            </div>

            {Movies.map((value, index) => { return <Item1 key={index} data={value} /> })}
          </div>

          {/* *****************TV Shows**************** */}

          <div className="row mt-5">
            <div className="col-md-4 d-flex justify-content-start flex-column">
              <div className="brdr w-25"></div>
              <h1>Trending <br /> TV Shows <br /> To Watch Now</h1>
              <p >Most Watched TV Shows by days</p>
              <div className="brdr"></div>
            </div>

            {TV.map((value, index) => { return <Item1 key={index} data={value} /> })}
          </div>


          {/* *****************Celebreties**************** */}

          <div className="row mt-5">
            <div className="col-md-4 d-flex justify-content-start flex-column">
              <div className="brdr w-25"></div>
              <h1>Trending <br /> Celebreties <br /> viewed Now</h1>
              <p >Most Viewed Celebreties by days</p>
              <div className="brdr"></div>
            </div>

            {People.map((value, index) => { return <Item2 key={index} data={value} /> })}
          </div>

        </>

          : <Loading />}


      </div>

    </div>
  )
}
