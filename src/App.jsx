import Navabar from './Componenets/Navabar'
// import React,{useState} from 'react';
// import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
function App() {

  // let time = new Date ().toLocalTimeString();
  
  // const [ctime , setCtime] = useState();

  // const UpdateTime = () => {
  //  const  time = new Date ().toLocalTimeString();
  //   setCtime(time)
  // }

  // setInterval(UpdateTime, 1000);
  

  return (
    <>
    <Navabar/>
    <Home/>

   </>

  )
}

export default App