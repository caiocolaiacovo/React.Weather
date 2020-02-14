import React from 'react';
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

const TodaysForecast = ({forecast}) => (
  <div className='forecast__todays-forecast'>
    {/* <International id='todaysforecast.header' /> */}
    <section style={{
      margin: '0 auto', 
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'auto'
    }}>
    {forecast.map(getForecast)}
    </section>
  </div>
);

const International = (props) => (
  <div>Teste</div>
);

export default TodaysForecast;