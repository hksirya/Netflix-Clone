import React from 'react'
import Banner from '../../Banner'
import Navbar from '../../Navbar'
import "./homeScreen.css"
import Row from "../../Row/row"
import userRequest from '../../app/Request'
const HomeScreen = () => {
  return (
   <div className='home-screen'>
   <Navbar/>
   <Banner/>
   <Row  title="Netflix Originals" isLargeRow fetchURL={userRequest.fetchNetflixOriginals}/>
   <Row  title="Trending Now" fetchURL={userRequest.fetchTrending}/>
   <Row  title="Top Rated" fetchURL={userRequest.fetchTopRated}/>
   <Row  title="Comedy Movies" fetchURL={userRequest.fetchComedyMovies}/>
   <Row  title="Action Movies" fetchURL={userRequest.fetchActionMovies}/>
   <Row  title="Romance Movies" fetchURL={userRequest.fetchRomanceMovies}/>
   <Row  title="Horror Movies" fetchURL={userRequest.fetchHorrorMovies}/>



   </div>
  )
}

export default HomeScreen