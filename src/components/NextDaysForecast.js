import React from 'react';
import moment from 'moment';

const NextDaysForecast = ({forecast}) => (
  <div className='forecast__next-days-forecast'>
    <p className='next-days-forecast__title'>Next days</p>
    <div className='next-days-forecast__container'>
      {!!forecast && forecast.map(a => (
        <div className='next-days-forecast__item'>
          <p className='next-days-forecast__day'>
            {moment(a.date).format('dddd')}
          </p>
          <div className='next-days-forecast__weather'>
            <img alt='weather icon' className='next-days-forecast__icon' 
              src={`https://www.weatherbit.io/static/img/icons/${a.icon}.png`}/>
            <p>{a.description}</p>
          </div>
          <div className='next-days-forecast__temperatures'>
            <p>
              Min: <span>{parseInt(a.minimumTemperature)}°</span>
            </p>
            <p>
              Avg: <span>{parseInt(a.temperature)}°</span>
            </p>
            <p>
              Max: <span>{parseInt(a.maximumTemperature)}°</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NextDaysForecast;