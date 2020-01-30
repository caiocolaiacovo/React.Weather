import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const ForecastOfNextDays = ({nextDays}) => (
  <div>
    Next days:
    {!!nextDays && nextDays.map(a => (
      <div>
        {moment(a.valid_date).format('dddd')}
        <div>{a.weather.description}</div>
        <div>Mínima: {a.low_temp}</div>
        <div>Máxima: {a.max_temp}</div>
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