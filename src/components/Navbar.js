import React,{ useState } from 'react'
import ReactDOM from 'react-dom'



export default function Navbar() {

    const [dropDownState, setDropDownState] = useState("none")

    return(
        <div className='NavBar'>
            <div>
            <img width={"60px"} src='./Xenotech_Icon.png'></img>
            </div>
            <nav>
                <ul className='navUL'>
                    <a >SHOP</a>
                    <a 
                       >ABOUT
                        
                    </a>
                    
                    <button className='mainButton'>CONTACT</button>
                </ul>

                

            </nav>
            
        </div>
    )
}