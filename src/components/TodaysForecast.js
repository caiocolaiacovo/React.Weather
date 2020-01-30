import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const getForecast = (forecast,i) => {
  const data = moment(forecast.timestamp_local);

  return (
    <div key={i}>
      <p>{data.format('ha')}</p>
      <p>{forecast.weather.description}</p>
      <p>{forecast.temp}</p>
    </div>
  );
};

const TodaysForecast = ({data}) => (
  <div>
    Today
    <section style={{
      margin: '0 auto', 
      display: 'flex', 
      border: '1px solid #ccc',
      flexDirection: 'row',
      overflowX: 'auto'
    }}>
    {data.map(getForecast)}
    </section>
  </div>
);

const mapStateToProps = state => {
  return state.forecast.today
}

export default connect(mapStateToProps)(TodaysForecast);