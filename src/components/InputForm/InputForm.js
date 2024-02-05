import { React } from "react"
import { useState } from "react";
import css from './InputForm.module.css'; 
import { useDispatch } from "react-redux";
import { addContacts } from "redux/tasks/operations";
import { useSelector } from "react-redux";
import { getContacts } from "redux/tasks/selectors";
import { Button, Text, Input, FormControl,
  FormLabel,} from "@chakra-ui/react";
import { Form, Formik } from 'formik';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export const InputForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const onInputHandler = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break
            default: return;
        }
    };
    const formValidationName = name => {
        return contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );
    };
     const formValidationNumber = number => {
    return contacts.find(contact => contact.number === number);
    };
    const formValidationQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
    };
    
        const submitForm = (e) => {
            e.preventDefault();
            
            if (formValidationName(name)) {
                alert(`${name} is already in contacts.`);   
            }else if(formValidationNumber(number)) {
                alert(`${name} is already in contacts.`);   
            }else if(formValidationQuery(name, number)) {
                alert("Enter the contact's name and number phone!");   
            } else {
                

            dispatch(addContacts({name, number},resetInput(),NotificationManager.success('Success message', 'Title here')));
              
            }
        
        }

    const resetInput = () => {
        setName('');
        setNumber('');
    }


    return (
            <>
            <Formik>
                <Form onSubmit={submitForm}>
                <FormControl borderRadius="10" p= '5' border='2px' borderColor='gray.200'
                boxShadow='dark-lg' px='6' rounded='md' bg='white'
                >
                
                    <FormLabel htmlFor='name'
                       // className={css.label_form}
                    >
                    <Text
                        
                        backgroundColor='#666'
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="extrabold">
                        Name
                    </Text>
                    <Input
                        variant='outline' 
                         placeholder='Name' size='md'
                        onChange={onInputHandler}
                        value={name}
                        type="text"
                        name="name"
                        //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            
                        //className={css.input}
                    />
                </FormLabel>
                <FormLabel htmlFor='number' className={css.label_form}>
                    <Text
                        backgroundColor='#666'
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="extrabold">
                        Number
                    </Text>
                    
                    <Input
                        placeholder='Number' size='md'
                        type="tel" 
                        onChange={onInputHandler}
                        
                        name="number"
                        value={number}
                        //className={css.input}
                    />
                </FormLabel>
                
                <Button
                    type="submit" borderColor='#666' variant="outline"
                >
                    <Text 
                        
                        backgroundColor='#666'
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="extrabold"
                    >
                        Add contact
                    </Text>
                        </Button> 
                        
            </FormControl>   
                </Form>
            </Formik>
             <>
                 <NotificationContainer/>
            </>
            </>
            
   
        ) 
    }; 
    
 



    