 
import './App.css';
import AboutMe from './AboutMe';
import HomePage from './HomePage';
import {  Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav" >
        <a href="/" className='nav-item'>Home</a>
        <a href="/" className='nav-item'>About Me</a>
      </nav>
    <Routes>
    <Route path='/' element= {<HomePage/>}/>
    <Route path='/aboutme' element= {<AboutMe/>}/>   
    </Routes>
   
    </div>
  );
}

export default App;
