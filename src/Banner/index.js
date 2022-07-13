import axios from "../localAxios";
import React, { useEffect, useState } from 'react'
import "./banner.css"
import userRequest from '../app/Request';

const Banner = () => {

    const[movie,setMovie]=useState([])

useEffect(()=>{
    async function fetchData(){
        const request =await axios.get(userRequest.fetchNetflixOriginals);

        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
    }

    fetchData();
},[])


  return (
    <div className='banner' style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')` , backgroundPosition:'center',backgroundSize:'cover'}}>
    
    <div className='banner-content'>  
    <h1 className='banner-heading'>{movie?.title || movie?.original_name || movie?.name}</h1>

    <button className='banner-btn'>Play</button>
    <button className='banner-btn'>My List</button>
   

    <div className='banner-descrip'>
    <p className='banner-para'>{ movie?.overview}</p>
    </div>
    </div> 
    <div className='banner-fade-top'></div>
    <div className='banner-fade-bottom'></div>
    </div>

  )
}

export default Banner