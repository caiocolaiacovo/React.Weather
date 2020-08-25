import React from 'react';
import { connect } from 'react-redux';
import { searchByCity } from 'actions/search';
import { Formik } from 'formik';

const Search = (props) => (
  <header className='header'>
    <div className='header__container'>
      <div className='header__logo'>React Weather</div>
      <Formik
        initialValues={{ city: '' }}
        onSubmit={(values) => {
          props.searchByCity(values.city);
        }}>
        {props => (
          <form onSubmit={props.handleSubmit} className='header__search-form'>
            <input
              type='text'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.city}
              name='city'
              placeholder='Enter your city'/>
            <button type='submit'>Search</button>
          </form>
        )}
      </Formik>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => {
  console.log('dispatch ', dispatch);
  console.log('searchByCity ', searchByCity);
  console.log('dispatch === searchByCity ', dispatch === searchByCity);
  return {
    searchByCity: city => dispatch(searchByCity(city)),
  }
};

export default connect(null, mapDispatchToProps)(Search);