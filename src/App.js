
import './App.css';
import Todolist from './TODO-LIST/Todolist';
import UseEffect from './UseEffect/UseEffect';
import UseState from './useState/UseState';
import Darkthem from './Context/Darkthem';
import Countvalue from './useReducer/Countvalue';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import UseMemoExample from './useMemo/useMemoexample';
import Login from './Login';
import Profile from './Profile';
// import UserContextProvider from './Context/UserContextProvider';
// import CountContextProvider from './Context/CountContextProvider';
import Count from './Count';
import { AppContextProvider } from './Context/AppContextProvider';


function App() {

 
  return (

     <div>
      {/* <HashRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/useeffect" element={<UseEffect />} />
          <Route exact path='/count' element={<Countvalue/>}/>
          <Route exact path='/usestate' element={<UseState/>}/>
          <Route exact path='/darkthem' element={<Darkthem/>}/>
          <Route exact path='/todolist' element={<Todolist/>}/>
          <Route exact path='/usememo' element={<UseMemoExample/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </HashRouter> */}
    
 
  <Login/>
      <Profile/>
      <Count/>
  


   
      
       
        
      
    </div>

  )
}

export default App;
