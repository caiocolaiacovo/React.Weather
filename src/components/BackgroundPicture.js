import React from 'react';
import { connect } from 'react-redux';
import conditionCodes from 'services/weatherConditionCodes';

const getPartyOfTheDay = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();

  if (hour >= 6 && hour < 18)
    return 'day';

  return 'night';
};

const getImageName = (code) => {
  console.log(JSON.stringify(conditionCodes));
  return conditionCodes[code];
}

const BackgroundPicture = ({ code }) => {
  const partOfTheDay = getPartyOfTheDay();
  const imageName = getImageName(code);
  const style = {
    backgroundImage: `url("/photos/${imageName}_${partOfTheDay}.jpg")`
  };
  
  return (
    <div
      className={`background-picture ${imageName ? 'background-picture__visible' : ''}`}
      style={style}>
    </div>
  );
};

const mapStateToProps = state => {
  return state.weather;
};

export default connect(mapStateToProps)(BackgroundPicture);