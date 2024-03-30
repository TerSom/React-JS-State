import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavigationBar';


const App = () => {

  const [getNavbarValue, setNavbarValue] = useState("");



  const changeNavbarValue = () => {
    setNavbarValue("My Tentang")
  }

  return (
    <div>
      <Navbar navValue={getNavbarValue}/>
      <h1>INI HOMEPAGE</h1>
      <button onClick={() => changeNavbarValue()}>Ubah NAvigasi</button>
    </div>
  )
}



export default App;
