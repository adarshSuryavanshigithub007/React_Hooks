import { Button } from '@mui/material'
import React, { useReducer, useState } from 'react'
import { reducer } from './useReducer'

const Countvalue = () => {
    const[count,dispatch]=useReducer(reducer,0)

    const Oncountincriment = ()=>{
        dispatch({type:"incriment"})
    }

    const Oncountdicriment =()=>{
        dispatch({type:"dicriment"})
    }

  return (
    <div style={{border:'2px solid blue'}}>
            <h1>UseReducer hook</h1>
        <Button onClick={Oncountincriment} variant='contained'>Incriment</Button>
        <h1> {count}</h1>
        <Button onClick={Oncountdicriment} variant='contained'>dicriment</Button>
    </div>
  )
}

export default Countvalue