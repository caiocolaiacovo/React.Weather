import React from 'react';
import { connect } from 'react-redux';
import TodaysForecast from './TodaysForecast';
import NextDaysForecast from './NextDaysForecast';

const Forecast = ({today, nextDays}) => (
  <div className='forecast'>
    <TodaysForecast forecast={today}/>
    <NextDaysForecast forecast={nextDays}/>
  </div>
);

const mapStateToProps = state => {
  return state.forecast;
};

export default connect(mapStateToProps)(Forecast);