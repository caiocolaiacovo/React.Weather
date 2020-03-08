import React from 'react';
import { connect } from 'react-redux';

const thunderstormCodes = {
  200: 'thundestorm',
  201: 'thundestorm',
  202: 'thundestorm',
  230: 'thundestorm',
  231: 'thundestorm',
  232: 'thundestorm',
  233: 'thundestorm',
  
};

const BackgroundPicture = ({code, partOfTheDay}) => {
  return (
    <div className='background-picture' style={{
      backgroundImage: `url("/photos/thunderstorm_${partOfTheDay === 'd' ? 'day' : 'night'}.jpg")`
      }}></div>
  );
};

const mapStateToProps = state => {
  return state.weather;
};

export default connect(mapStateToProps)(BackgroundPicture);