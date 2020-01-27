import React from 'react';
import { connect } from 'react-redux';

const TodaysForecast = ({today}) => {
  return (
    <div>
      Today
      {today.map((forecast,i) => (
        <div key={i}>
          {forecast.timestamp_utc}
          {forecast.weather.description}
          {forecast.temp}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return state.forecast
}

export default connect(mapStateToProps)(TodaysForecast);