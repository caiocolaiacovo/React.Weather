import React from 'react';
import moment from 'moment';

const getForecast = (forecast, i) => {
  const time = moment(forecast.time);

  return (
    <div className='todays-forecast__item' key={i}>
      <p>{time.format('h a')}</p>
      <img alt='weather icon' className='todays-forecast__icon' src={`https://www.weatherbit.io/static/img/icons/${forecast.icon}.png`}/>
      <p className='todays-forecast__description'>{forecast.description}</p>
      <p>{parseInt(forecast.temperature)}°</p>
    </div>
  );
};

const TodaysForecast = ({forecast}) => (
  <div className='forecast__todays-forecast'>
    <p className='todays-forecast__title'>Next 24 hours</p>
    <div className='todays-forecast__container'>
      {/* <International id='todaysforecast.header' /> */}
      {forecast.map(getForecast)}
    </div>
  </div>
);

const International = (props) => (
  <div>Teste</div>
);

export default TodaysForecast;