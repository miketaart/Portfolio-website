import React from 'react';
import Navbar from "./components/Navbar.jsx"
import LeftSidebar from "./components/LeftSidebar.jsx"
import MainContent from "./pages/MainContent.jsx"
import RightSidebar from "./components/RightSidebar.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="wrapper">
        <LeftSidebar/>
        <MainContent/>
        <RightSidebar/>
      </div>
    </div>
  );
}

export default App;
