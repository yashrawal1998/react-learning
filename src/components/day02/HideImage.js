import React, { useState } from 'react'
import img from './images/6-24.jpg'
import  './hideImage.css'

const HideImage = () => {
    const [show,setShow] = useState(false)
  return (
    <div>
        <button onClick={()=>{setShow(true)}}>Show</button>
        <button onClick={()=>{setShow(false)}}>Hide</button>
        <div>{
           show? <img className={"imageKiClass"} src={img} alt="lion" />:null
              }
        </div>
    </div>
  )
}

export default HideImage