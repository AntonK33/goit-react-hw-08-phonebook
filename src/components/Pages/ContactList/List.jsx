import React from 'react';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/tasks/operations';

export const List = ({ contact }) => {
  const dispatch = useDispatch();

  const del = e => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li key={contact.id} className={css.filter_item}>
      <p className={css.filter_p}>
        {contact.name}: {contact.number}
      </p>
      <button
        onClick={() => {
          del(contact.id);
        }}
        className={css.deleteContactBtn}
      >
        Delete
      </button>
    </li>
  );
};
