import React from 'react'


export default function Shop(props) {

  
    
    return(
        <div>
            <div className='featuredDrops'>
        
        <div className='FeaturedDropsCard' onMouseEnter={(event) => {
            // var comingSoon = document.getElementById("comingSoonWrapper");
            // comingSoon.style.top = event.clientY + "px";
            // comingSoon.style.left = event.clientX + "px";
            // const mouseY = event.clientY + "px"
            // const mouseX = event.clientX + "px"

            
        }}>
            <div className='FeaturedDropsTitle'>
            </div>
            <div >
                <div className='FeaturedDropsVideo'>
                <video className='FeaturedDropsVideoImage' src='./Platonic_Solids_Ring.mp4' autoPlay loop muted></video>
                </div>
            </div>
            <div className='FeaturedDropsSubText'>
                <div>
                    <h1>Platonic Solids Ring</h1>
                </div>
            </div>
            {/* <div className='comingSoonWrapper' style={{"top": mouseY, "left": mouseX }}>TEST</div> */}
        </div>
        
        <div className='FeaturedDropsCard'>
            <div className='FeaturedDropsTitle'>
            </div>
            <div >
                <div className='FeaturedDropsVideo'>
                <video className='FeaturedDropsVideoImage' src='./greenslime_shoe.mp4' autoPlay loop muted></video>                </div>
            </div>
            <div className='FeaturedDropsSubText'>
                <div>
                    <h1>SLIMETECH</h1>
                </div>
            </div>
        </div>
        <div className='FeaturedDropsCard'>
            <div className='FeaturedDropsTitle'>
            </div>
            <div >
                <div className='FeaturedDropsVideo'>
                <video className='FeaturedDropsVideoImage' src='./xenokickLava.mp4' autoPlay loop muted></video>                </div>
            </div>
            <div className='FeaturedDropsSubText'>
                <div>
                    <h1>LAVATECH</h1>
                </div>
            </div>
        </div>
        <div className='FeaturedDropsCard'>
            <div className='FeaturedDropsTitle'>
            </div>
            <div >
                <div className='FeaturedDropsVideo'>
                <video className='FeaturedDropsVideoImage' src='./pickleFinanceJacket.mp4' autoPlay loop muted></video>                </div>
            </div>
            <div className='FeaturedDropsSubText'>
                <div>
                    <h1>PICKLE SPACESUIT</h1>
                </div>
            </div>
        </div>
        <div className='FeaturedDropsCard'>
            <div className='FeaturedDropsTitle'>
            </div>
            <div >
                <div className='FeaturedDropsVideo'>
                <video className='FeaturedDropsVideoImage' src='./prizekick.mp4' autoPlay loop muted></video>                </div>
            </div>
            <div className='FeaturedDropsSubText'>
                <div>
                    <h1>PRIZEKICK</h1>
                </div>
            </div>
        </div>
        <div className='FeaturedDropsCard'>
            <div className='FeaturedDropsTitle'>
            </div>
            <div >
                <div className='FeaturedDropsVideo'>
                <video className='FeaturedDropsVideoImage' src='./goldShoe.mp4' autoPlay loop muted></video>                </div>
            </div>
            <div className='FeaturedDropsSubText'>
                <div>
                    <h1>GOLDKICK</h1>
                </div>
            </div>
        </div>
        <div className='FeaturedDropsCard'>
            <div className='FeaturedDropsTitle'>
            </div>
            <div >
                <div className='FeaturedDropsVideo'>
                <video className='FeaturedDropsVideoImage' src='./silverShoe.mp4' autoPlay loop muted></video>                </div>
            </div>
            <div className='FeaturedDropsSubText'>
                <div>
                    <h1>SILVERKICK</h1>
                </div>
            </div>
        </div>
        <div className='FeaturedDropsCard'>
            <div className='FeaturedDropsTitle'>
            </div>
            <div >
                <div className='FeaturedDropsVideo'>
                <video className='FeaturedDropsVideoImage' src='./greenday shoe.mp4' autoPlay loop muted></video>                </div>
            </div>
            <div className='FeaturedDropsSubText'>
                <div>
                    <h1>GREENDAY KICK</h1>
                </div>
            </div>
        </div>
        
        </div>
        </div>
    )
}