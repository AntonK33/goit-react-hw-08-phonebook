import { useSelector } from 'react-redux';
import React from 'react';
import css from './ContactList.module.css';
import { getContacts, getState } from 'redux/tasks/selectors';
import { getFilterContact } from 'redux/tasks/selectors';
import { List } from './List';
import { Text,Box
 } from "@chakra-ui/react";
const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const objStat = useSelector(getState);
  console.log(objStat);
  const FilterCont = useSelector(getFilterContact);

  const filterList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(FilterCont)
  );
  return (
    <>
      <Box px="5">
        <Text color="gray">Contacts</Text>
      <ul className={css.filter_list}>
        {filterList.map(contact => {
          return <List key={contact.id} contact={contact} />;
        })}
      </ul>
      </Box>
      
    </>
  );
};

export default ContactList;

