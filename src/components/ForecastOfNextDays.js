import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const ForecastOfNextDays = ({nextDays}) => (
  <div>
    Next days:
    {!!nextDays && nextDays.map(a => (
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

const mapStateToProps = state => {
  console.log(state);
  return {
    nextDays: state.forecast.nextDays
  };
};

export default connect(mapStateToProps)(ForecastOfNextDays);