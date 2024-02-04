import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/tasks/filterSlise';
import { Box, Text, Input, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
  
const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = e => {
    const name = e.target.value;
    console.log(name);
    dispatch(filterContact(name));
  };

  return (
    <Box px="5" py="5"> 
        <FormLabel className={css.label_form}>
      <Text
        color="gray"
      // className={css.filter_span}
      >Find contacts by name:</Text>
      <Input
        onChange={filterContacts}
        type="text"
        name="filter"
        className={css.input_filter}
      />
    </FormLabel>
    </Box>
  
  );
};

export default Filter;
