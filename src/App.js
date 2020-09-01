import React from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import BackgroundPicture from './components/BackgroundPicture';
import './App.css';

function App() {
  return (
    <div className='app'>
      <BackgroundPicture />
      <Search/>
      <Weather/>
      <Forecast/>
    </div>
  );
}

export default App;