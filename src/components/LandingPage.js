import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import {Suspense, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import FeaturedDrops from './FeaturedDrops';
import Shop from './Shop';
import AboutPage from './AboutPage';

function Model({ ...props }) {
  const group = useRef()
  
  const { nodes, materials } = useGLTF('/shoe.gltf')

  useFrame( () => (group).current.rotation.y += props.rotationSpeed)

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI, -0.85, -Math.PI]}>
        <mesh geometry={nodes.Plane003.geometry} material={materials.body} material-color={props.customColors.body} />
        <mesh geometry={nodes.Plane003_1.geometry} material={materials.sole} material-color={props.customColors.sole}/>
        <mesh geometry={nodes.Plane003_2.geometry} material={materials.collar} material-color={props.customColors.collar}/>
        <mesh geometry={nodes.Plane003_3.geometry} material={materials.tag} material-color={props.customColors.collar}/>
        <mesh geometry={nodes.Plane003_4.geometry} material={materials.tongue} material-color={props.customColors.body}/>
        <mesh geometry={nodes.Plane003_5.geometry} material={materials.hornRight} material-color={props.customColors.collar}/>
        <mesh geometry={nodes.Plane003_6.geometry} material={materials.hornLeft} material-color={props.customColors.collar}/>
        <mesh geometry={nodes.Plane003_7.geometry} material={materials.keychain} material-color={"white"}/>
        <mesh geometry={nodes.Plane003_8.geometry} material={materials.keychainLink} material-color={"blue"}/>
        <mesh geometry={nodes.Plane003_9.geometry} material={materials.swoosh} material-color={"blue"}/>
        <mesh geometry={nodes.Plane003_10.geometry} material={materials.toe} material-color={props.customColors.body}/>
        <mesh geometry={nodes.Plane003_11.geometry} material={materials.badge} material-color={"blue"}/>
        <mesh geometry={nodes.Plane003_12.geometry} material={materials.tongueStrap} material-color={"white"}/>
        <mesh geometry={nodes.Plane003_13.geometry} material={materials.laces} material-color={props.customColors.stripes}/>
        <mesh geometry={nodes.Plane003_14.geometry} material={materials.eyelets} material-color={"white"}/>
      </group>
    </group>
  )
}



export default function LandingPage() {

    const [xRotation, setXRotation] = useState(0);
    const [enableZoom, setEnableZoom] = useState(true);
    const [colorPicker, showColorPicker] = useState("none")
    const [rotationSpeed, setRotationSpeed] = useState(0.005)

    const [shopPageState, setShopPageState] = useState("none")
    const [featuredDropsPageState, setFeaturedDropsPagesState] = useState("block")
    const [landingPagePageState, setLandingPagePageState] = useState("block")
    const [aboutPageState, setAboutPageState] = useState("none")
   

    const [body, setBody] = useState("ffffff")
    const [sole, setSole] = useState("ffffff")
    const [stripes, setStripes] = useState("ffffff")
    const [collar, setCollar] = useState("ffffff")
    
    return(

        <div>


           <div className='NavBar'>
            
            <div onClick={() => {
                                    setFeaturedDropsPagesState("block");
                                    setLandingPagePageState("block");
                                    setShopPageState("none");
                                    setAboutPageState("none")
                                    }}>
            <img width={"60px"} 
                src='./Xenotech_Icon.png'
                
                 ></img>
            </div>

            <nav>
                <ul className='navUL'>
                    <a onClick={() => {
                                    setFeaturedDropsPagesState("none");
                                    setLandingPagePageState("none");
                                    setShopPageState("block");
                                    setAboutPageState("none")
                                    }} >SHOP</a>
                    <a onClick={() => {
                                    setFeaturedDropsPagesState("none");
                                    setLandingPagePageState("none");
                                    setShopPageState("none");
                                    setAboutPageState("block")
                                    }}>BLOG</a>
                    <a onClick={() => {
                                    setFeaturedDropsPagesState("none");
                                    setLandingPagePageState("none");
                                    setShopPageState("none");
                                    setAboutPageState("block")
                                    }}>ABOUT</a>
                    
                    
                </ul>
            </nav>


            <img  width={"40px"}
                  src='./shoppingCart.png' 
                  className='cartButton'
                  style={{"margin-right": "2vw"}} 
                  onClick={() => {
                                    setFeaturedDropsPagesState("none");
                                    setLandingPagePageState("none");
                                    setShopPageState("block");
                                    setAboutPageState("none")
                                    }} ></img>
            <button className='contactButton'>CONTACT</button>
        </div>

        <div className='landingPageContainer' style={{"display": landingPagePageState}} >


        
                    <div className='canvas' >
                        <div className='landingPageText'>
                            <p><i style={{  "background": "-webkit-linear-gradient(#eee, #333)",
                                            "-webkit-background-clip": "text",
                                            "-webkit-text-fill-color": "transparent"}}><i className='xenotech'>XENOTECH</i></i> <i className='digitalDrip'><i>digital</i> <i> drip</i>
                                                                    <br></br>
                                                                    <i style={{  "background": "-webkit-linear-gradient(#eee, #333)",
                                            "-webkit-background-clip": "text",
                                            "-webkit-text-fill-color": "transparent"}}>Metaverse</i> <i>ready</i></i></p>
                                                                    <br></br>
                                                                
                        </div>

                        <button className='secondaryButton'
                                onMouseEnter={() => setRotationSpeed(.01)}
                                onMouseLeave={() => setRotationSpeed(.005)}
                                onClick={() => {
                                    setFeaturedDropsPagesState("none");
                                    setLandingPagePageState("none");
                                    setShopPageState("block");
                                    setAboutPageState("none")
                                    }}
                               
                                >Collect Now</button>

                        <div className='canvas3D'>
                            <Canvas>
                                <Suspense fallback={null} >
                                    <directionalLight  
                                            intensity={0.9} 
                                            angle={0.1} 
                                            penumbra={1} 
                                            position={[10,15,10]} 
                                            castShadow
                                            />
                                    <Model  
                                            position={[-.4,.07,2.8]} 
                                            rotation={[.4,xRotation,0]}
                                            customColors={{body: body, sole: sole, stripes: stripes, collar: collar}}
                                            rotationSpeed={rotationSpeed}
                                            />
                                </Suspense>
                            </Canvas>
                        </div>  
                    

                        <div className='colorPicker' onMouseEnter={()=> showColorPicker("grid")} >
                        
                        <div className='colorPickerLabel'>
                            <h1 
                                >Color Picker</h1>
                            <img src='./arrowDown.svg'></img>
                        </div>


                        <div  className='colorPalette'>
                            <div className='colorInputContainer'>
                                <div className='color'>
                                    <input type="color" name="body" onChange={(e)=> setBody(e.target.value)} />
                                        <label>Body</label>
                                </div>
                                <div className='color'>
                                    <input type="color" name='sole' onChange={(e)=> setSole(e.target.value)}/>
                                        <label>Sole</label>
                                </div>
                                <div className='color' name='stripes' onChange={(e)=> setStripes(e.target.value)}>
                                    <input type="color" />
                                        <label>Laces</label>
                                </div>
                                <div className='color'>
                                    <input type="color" name='collar' onChange={(e)=> setCollar(e.target.value)}/>
                                        <label>Collar</label>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>



                    <div style={{"display": featuredDropsPageState}}>
                    <FeaturedDrops   />
                    </div>


                     </div>

                    <div style={{"display": shopPageState}}>
                        <Shop />
                    </div>

                    <div style={{"display": aboutPageState}}>
                        <AboutPage />
                    </div>



            </div>
    )
}