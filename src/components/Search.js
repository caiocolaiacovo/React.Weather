import React from 'react';
import { connect } from 'react-redux';
import { searchByCity } from '../actions/search';
import { Formik } from 'formik';

const Search = (props) => (
  <Formik
    initialValues={{ city: '' }}
    onSubmit={(values) => {
      props.searchByCity(values.city);
    }}>
    {props => (
      <form onSubmit={props.handleSubmit}>
        Enter your city:
        <input
          type='text'
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.city}
          name='city'/>
        <button type='submit'>Search</button>
      </form>
    )}
  </Formik>
);

const mapDispatchToProps = dispatch => ({
  searchByCity: city => dispatch(searchByCity(city)),
});

export default connect(null, mapDispatchToProps)(Search);