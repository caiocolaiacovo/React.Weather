import React from 'react';
import { connect } from 'react-redux';

const Weather = ({cityName, description, temperature}) => {
  return (
  <div className='weather'>
    <div className='weather__container'>
      <div className='weather__city'>{cityName}</div>
      <div className='weather__description'>{description}</div>
      <div className='weather__temperature'>{parseInt(temperature)}°</div>
    </div>
  </div>);
};

const mapStateToProps = state => {
  return state.weather;
};

export default connect(mapStateToProps)(Weather);