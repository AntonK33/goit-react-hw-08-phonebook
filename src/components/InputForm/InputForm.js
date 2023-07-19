import { React } from "react"
import { useState } from "react";
import css from './InputForm.module.css'; 
import { useDispatch } from "react-redux";
import { addContacts } from "redux/tasks/operations";
import { useSelector } from "react-redux";
import { getContacts } from "redux/tasks/selectors";

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
                

            dispatch(addContacts({name, number}));
                
            }
            resetInput();
        }

    const resetInput = () => {
        setName('');
        setNumber('');
    }
        return (
            <form
                className={css.form}
                onSubmit={submitForm}>
                <label htmlFor='name' className={css.label_form}>
                    <span>Name</span>
                    <input
                        onChange={onInputHandler}
                        value={name}
                        type="text"
                        name="name"
                        //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={css.input}
                    />
                </label>
                <label htmlFor='number' className={css.label_form}>
                    <span>Number</span>
                    <input
                        onChange={onInputHandler}
                        type="tel"
                        name="number"
                        value={number}
                        className={css.input}
                    />
                </label>
                
                <button type="submit" className={css.addBtn}>Add contact</button>
                      
            </form>        
        ) 
    }; 
    
 



    