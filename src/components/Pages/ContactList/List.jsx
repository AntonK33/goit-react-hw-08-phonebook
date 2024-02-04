import React from 'react';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/tasks/operations';
import { Button, Text, Box
} from "@chakra-ui/react";
  
export const List = ({ contact }) => {
  const dispatch = useDispatch();

  const del = e => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <Box >
      <li key={contact.id} className={css.filter_item}>
      <Text
         color="gray"
        // className={css.filter_p}
      >
        {contact.name}: {contact.number}
      </Text>
      <Button
        onClick={() => {
          del(contact.id);
        }}
        className={css.deleteContactBtn}
      >
        Delete
      </Button>
    </li>
    </Box>
    
  );
};
