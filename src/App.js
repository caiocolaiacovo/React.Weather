import React from 'react';
import { connect } from 'react-redux';
import Search from './components/Search';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import BackgroundPicture from './components/BackgroundPicture';
import './App.css';
import BlankSlate from './components/BlankSlate';

function App({weather, forecast, loading}) {
  const showWeather = Object.keys(weather).length !== 0;
  const showForecast = forecast.today.length !== 0 && forecast.nextDays.length !== 0;
  
  return (
    <div className='app'>
      <BackgroundPicture />
      <Search/>
      {showWeather && <Weather/>}
      {showForecast && <Forecast/>}
      {(!showWeather || !showForecast) && <BlankSlate/>}
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);