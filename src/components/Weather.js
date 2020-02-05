import React from 'react';
import { connect } from 'react-redux';

const Weather = ({cityName, description, temperature}) => {
  return (
  <div>
    <h4>{cityName}</h4>
    <h6>{description}</h6>
    <h1>{temperature}°</h1>
  </div>);
};

const mapStateToProps = state => {
  console.log(state);
  return state.weather;
};

export default connect(mapStateToProps)(Weather);