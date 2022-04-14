import React, { useState } from "react";
import LandingPage from "./LandingPage";
import FeaturedDrops from "./FeaturedDrops";
import Shop from "./Shop";



export default function PageContent() {
    
    const [pageState, setPageState] = useState({
    LandingPage: <LandingPage />,
    Shop: <Shop />
})
    return (
        <div>

        
        <LandingPage />
        {/* <Shop /> */}
        
                  

        </div>
    )
}