import React from 'react';
import { connect } from 'react-redux';
import TodaysForecast from './TodaysForecast';
import ForecastOfNextDays from './ForecastOfNextDays';

const Forecast = ({today, nextDays}) => (
  <div>
    <TodaysForecast forecast={today}/>
    <ForecastOfNextDays forecast={nextDays}/>
  </div>
);

const mapStateToProps = state => {
  return state.forecast;
};

export default connect(mapStateToProps)(Forecast);