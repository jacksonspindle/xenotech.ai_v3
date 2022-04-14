import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import style from './style.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import FeaturedDrops from './components/FeaturedDrops'
import Shop from './components/Shop'
import PageContent from './components/PageContent'


export default function App(){


    return(
        <div>
            {/* <Navbar/> */}
            {/* <Shop /> */}

            <PageContent />
            
            {/* <FeaturedDrops/> */}

        </div>
    ) 

}


