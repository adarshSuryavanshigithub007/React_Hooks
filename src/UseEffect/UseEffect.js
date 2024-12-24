import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [otherCount,setOtherCount]=useState(5)

  // Similar to componentDidMount and componentDidUpdate:
  //!useeffect witout dependacy
  // useEffect(() => {
    
  //   document.title = `You clicked ${count} times`;
  // });
  //!useeffect empty array
  // useEffect(() => {
    
  //   document.title = `You clicked ${count} times`;
  // },[]);
    //!useeffect with variable
    useEffect(() => {
    
      document.title = `You clicked ${otherCount} times`;
    },[otherCount]);
        //!useeffect clean-up function
        useEffect(() => {
    
        const timer =   setInterval(() => {
            setCount(count+1)
          }, 1000);
          return()=>{
clearInterval(timer)
          }
        });
  return (
    <div><p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    <button onClick={() => setOtherCount(otherCount + 5)}>
      OtherClick me
    </button></div>
  )
}


export default UseEffect