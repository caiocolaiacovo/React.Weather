import React from 'react';
import { connect } from 'react-redux';
import TodaysForecast from './TodaysForecast';
import ForecastOfNextDays from './ForecastOfNextDays';

const Forecast = (props) => (
  <div>
    <TodaysForecast />
    <ForecastOfNextDays/>
  </div>
);

const mapStateToProps = state => {
  return state.forecasts;
};

export default connect(mapStateToProps)(Forecast);