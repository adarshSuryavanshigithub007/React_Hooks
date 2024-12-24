import { Button } from '@mui/material'
import React, { useState } from 'react'

const UseState = () => {
    const[text,setText]=useState(false)
    const [show,setShow]=useState(false)
    const showText = ()=>{
        setText(!text)
        setShow(true)
    }
  return (
    <div style={{border:'2px solid green',margin:'10px'}}>
        <h1>UseState Hook</h1>
        {show?(<>{text===true?"Hi Adarsh":"bye Adarsh"}
      </>):"no data"}   <Button onClick={showText}>click button</Button>
        
    </div>
  )
}

export default UseState