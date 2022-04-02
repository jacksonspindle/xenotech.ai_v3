import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import {Suspense, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'



function Model({ ...props }) {
  const group = useRef()
  
  const { nodes, materials } = useGLTF('/shoe.gltf')

  useFrame( () => (group).current.rotation.y += 0.005)

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI, -0.85, -Math.PI]}>
        <mesh geometry={nodes.Plane003.geometry} material={materials.body} />
        <mesh geometry={nodes.Plane003_1.geometry} material={materials.sole} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials.collar} />
        <mesh geometry={nodes.Plane003_3.geometry} material={materials.tag} />
        <mesh geometry={nodes.Plane003_4.geometry} material={materials.tongue} />
        <mesh geometry={nodes.Plane003_5.geometry} material={materials.hornRight} />
        <mesh geometry={nodes.Plane003_6.geometry} material={materials.hornLeft} />
        <mesh geometry={nodes.Plane003_7.geometry} material={materials.keychain} />
        <mesh geometry={nodes.Plane003_8.geometry} material={materials.keychainLink} />
        <mesh geometry={nodes.Plane003_9.geometry} material={materials.swoosh} />
        <mesh geometry={nodes.Plane003_10.geometry} material={materials.toe} />
        <mesh geometry={nodes.Plane003_11.geometry} material={materials.badge} />
        <mesh geometry={nodes.Plane003_12.geometry} material={materials.tongueStrap} />
        <mesh geometry={nodes.Plane003_13.geometry} material={materials.laces} />
        <mesh geometry={nodes.Plane003_14.geometry} material={materials.eyelets} />
      </group>
    </group>
  )
}


    




export default function LandingPage() {

    // let maxDistance =
    // const ref = useRef()

    const [xRotation, setXRotation] = useState(0);
    const [enableZoom, setEnableZoom] = useState(true);
    const [colorPicker, showColorPicker] = useState("none")
    

    

  
     

    return(
        <div className='landingPageContainer'>
            {/* <div className='landingPageContainer'>
      
            </div> */}
                {/* <div className='overlay'></div> */}
                {/* <div className='landingPageText'>
                    <h4>ON THE MOON</h4>
                    <p><i style={{"fontFamily": "Alien"}}>XENOTECH</i> digital drip
                    <br></br>
                    <i>Metaverse</i> ready</p>
                    <br></br>
                    <button className='secondaryButton'>Collect Now</button>
                </div> */}

                <div className='canvas' >
                
                    

                    <div className='landingPageText'>
                        <p><i style={{  "background": "-webkit-linear-gradient(#eee, #333)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent"}}>XENOTECH</i> digital drip
                        <br></br>
                        <i style={{  "background": "-webkit-linear-gradient(#eee, #333)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent"}}>Metaverse</i> ready</p>
                        <br></br>
                        <button className='secondaryButton'>Collect Now</button>
                    </div>


                  


                    <div className='canvas3D'>

                        <Canvas>
                            <Suspense fallback={null} >
                                <ambientLight/>
                                <spotLight  intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow/>
                                <Model  position={[-.4,.07,2.8]} rotation={[.4,xRotation,0]} />
                                {/* <OrbitControls 
                                        minDistance={3}
                                        maxDistance={4}
                                        enablePan={true} 
                                        enableZoom={enableZoom}
                                        enableRotate={true}
                                /> */}
                            </Suspense>
                        </Canvas>
                      </div>  
                  

                    <div className='colorPicker' onMouseEnter={()=> showColorPicker("grid")} onMouseLeave={()=> showColorPicker("none")}>
                      <div className='colorPickerLabel'>
                      <h1 
                          >Color Picker</h1>
                      <img src='./arrowDown.svg'></img>
                      </div>
                        <div style={{"display": colorPicker}} className='colorPalette'>
                            <div className='color'>
                                <input type="color" />
                                    <label>Laces</label>
                            </div>
                            <div className='color'>
                                <input type="color" />
                                    <label>Laces</label>
                            </div>
                            <div className='color'>
                                <input type="color" />
                                    <label>Laces</label>
                            </div>
                            <div className='color'>
                                <input type="color" />
                                    <label>Laces</label>
                            </div>
                        </div>
                    </div>
                </div>

        </div>

    )
}