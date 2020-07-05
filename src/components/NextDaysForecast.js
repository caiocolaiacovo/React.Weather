import React from 'react';
import moment from 'moment';

const NextDaysForecast = ({forecast}) => (
  <div className='forecast__next-days-forecast'>
    <p className='next-days-forecast__title'>Next days</p>
    <div className='next-days-forecast__container'>
      {!!forecast && forecast.map(a => {
        const time = moment.unix(a.date);
        return (
        <div key={a.date} className='next-days-forecast__item'>
          <p className='next-days-forecast__day'>
            {time.format('dddd')}
          </p>
          <div className='next-days-forecast__weather'>
            <img alt='weather icon' className='next-days-forecast__icon' 
              src={`http://openweathermap.org/img/wn/${a.icon}.png`}/>
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
      )})}
    </div>
  </div>
);

export default NextDaysForecast;