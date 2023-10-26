import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#374151';
      showAlert("Dark mode has been enabled", "success")
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000 );
      
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now'; 
      // }, 1500 );
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" home="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter your text to analyse" mode={mode} showAlert={showAlert} />
      </div> */}

      <Router>
        <Navbar title="TextUtils" home="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />} />
            <Route path="about"  element={<About mode = {mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
