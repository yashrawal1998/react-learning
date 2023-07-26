import React, { useState } from 'react'
import bulbOn from './images/istockphoto-1149246206-1024x1024.jpg' 
import bulbOff from './images/bulb-electricity-energy-glass.jpg'

const ToggleBtn = () => {
    const [on,setOn]=useState(false)
  return (
    <div>
        <button onClick={()=>{setOn(!on)}}>{on? "OFF":"ON"}</button>
        <div >
           <img style={{width:"400px",height:'400px', backgroundColor:'black'}} src= {on?bulbOn:bulbOff}/>
        </div>
    </div>
  )
}

export default ToggleBtn