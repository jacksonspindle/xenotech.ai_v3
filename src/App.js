import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import FeaturedDrops from './components/FeaturedDrops'



export default function App(){

    return(
        <div>
            <Navbar/>

            <LandingPage/>
            <FeaturedDrops/>
        </div>
    ) 

}


