import React from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import './App.css';

function App() {
  return (
    <div style={{
      backgroundImage: 'url("/photos/scattered_clouds.jpg")', 
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      overflow: 'auto',
      color: 'white',
      textShadow: '2px 1px 4px #000',
      fontFamily: 'Arial, Helvetica, sans-serif'}}>
      <Search/>
      <Weather/>
      <Forecast/>
    </div>
  );
}

export default App;
