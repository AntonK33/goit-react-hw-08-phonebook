import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/tasks/filterSlise';

const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = e => {
    const name = e.target.value;
    console.log(name);
    dispatch(filterContact(name));
  };

  return (
    <label className={css.label_form}>
      <span className={css.filter_span}>Find contacts by name:</span>
      <input
        onChange={filterContacts}
        type="text"
        name="filter"
        className={css.input_filter}
      />
    </label>
  );
};

export default Filter;
