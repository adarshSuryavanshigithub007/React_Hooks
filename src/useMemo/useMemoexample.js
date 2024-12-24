import React, { useContext, } from 'react'

// import UserContext from '../Context/UserContext'

const UseMemoExample = () => {
  // const [add, setAdd] = useState(0)
  // const [min, setMin] = useState(100)
  // function Maltipliction() {
  //   console.log("____________*******************_________________") // here unneccesry function call when i click substract button also 
  //   return add*10
  // }
  //to avaold this we can use use memo to increase perfomance of app
  // const {user} = useContext(UserContext)
  // console.log(user?.name)
  // const Multiplication = useMemo(function Maltipliction() {
  //   console.log("____________*******************_________________") // here unneccesry function call when i click substract button also 
  //   return add * 10
  // }, [add])

  return (
    <div>
      {/* <h1> memo : {user?.name}</h1> */}
      {/* {Multiplication}
      <button onClick={() => setAdd(add + 1)}>Addition</button>{add}<br />
      <button onClick={() => setMin(min - 1)}>Substraction</button>{min}<br /> */}
    </div>
  )
}

export default UseMemoExample