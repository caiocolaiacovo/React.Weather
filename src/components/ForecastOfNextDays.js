import React from 'react';
import moment from 'moment';

const ForecastOfNextDays = ({forecast}) => (
  <div>
    Next days:
    {!!forecast && forecast.map(a => (
      <div>
        {moment(a.date).format('dddd')}
        <div>{a.description}</div>
        <div>Mínima: {a.minimumTemperature}</div>
        <div>Média: {a.temperature}</div>
        <div>Máxima: {a.maximumTemperature}</div>
      </div>
    ))}
  </div>
);

export default ForecastOfNextDays;