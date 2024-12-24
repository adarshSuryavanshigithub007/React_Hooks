import React, { useState } from 'react'

const Incriment = () => {
    const [count,setCount]=useState(0)
    
    const Incrimentvalue = ()=>{
        setCount(count+1)
    }

    const decrimentvalue = ()=>{
        setCount(count-1)
    }

  return (
    <div>
        <button onClick={decrimentvalue}>decriment</button>
     {count}
        <button onClick={Incrimentvalue}>incriment</button>
    </div>
  )
}

export default Incriment