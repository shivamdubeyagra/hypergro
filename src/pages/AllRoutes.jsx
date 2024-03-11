import React from 'react'
import {Routes,Route} from 'react-router-dom'
import SinglePage from './SinglePage.jsx'
import Home from './Home.jsx';
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/video/:videoId" element={<SinglePage/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes
