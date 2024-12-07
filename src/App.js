import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import Alert from './components/Alert'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() =>{
      setAlert(null);
      
    },800);
}
  return (
  <>
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path="/" element={
            <TextArea showAlert={showAlert}/>} /> 
            <Route path="/about" element={
            <About/>} />
       </Routes>
     </div>
    </Router>
  </>
  );
}

export default App;
