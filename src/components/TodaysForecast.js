import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const getForecast = (forecast,i) => {
  const time = moment(forecast.time);

  return (
    <div key={i}>
      <p>{time.format('ha')}</p>
      <p>{forecast.description}</p>
      <p>{forecast.temperature}</p>
    </div>
  );
};

const TodaysForecast = ({today}) => (
  <div>
    Today
    <section style={{
      margin: '0 auto', 
      display: 'flex', 
      border: '1px solid #ccc',
      flexDirection: 'row',
      overflowX: 'auto'
    }}>
    {today.map(getForecast)}
    </section>
  </div>
);

const mapStateToProps = state => {
  return {
    today: state.forecast.today,
  };
};

export default connect(mapStateToProps)(TodaysForecast);