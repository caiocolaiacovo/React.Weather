import React from 'react';
import { connect } from 'react-redux';

const Weather = ({city_name, temp, weather = {}}) => {
  return (
  <div>
    <h4>{city_name}</h4>
    <h6>{weather.description}</h6>
    <h1>{temp}°</h1>
  </div>);
};

const mapStateToProps = state => {
  return state.weather;
};

export default connect(mapStateToProps)(Weather);