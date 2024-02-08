import { useState } from "react"
import { useDispatch } from "react-redux";
import  css  from "./Register.module.css";
import { register } from "redux/auth/operations";
import { Button, Text, Input,
} from "@chakra-ui/react";
import { NotificationContainer, NotificationManager } from "react-notifications";
import 'react-notifications/lib/notifications.css';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

     const onInputHandler = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break
            default: return;
        }
    };
    
    const regiserSend = (e) => {
       e.preventDefault(); 
        dispatch(register({ name, email, password }))
        // setName('');
        // setEmail('');
        // setPassword('')
         .then(() => {
        NotificationManager.succes('Check your entry');;
      })
      .catch(error => {
        NotificationManager.error(`Incorrect login or password`);
      });
    }
    return (
      <form
               className={css.form}
                onSubmit={regiserSend}>
                <label htmlFor='name' className={css.label_form}>
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
                </label>
                <label htmlFor='Email' className={css.label_form}>
                <Text
                        backgroundColor='#666'
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="extrabold">
                        Email
                    </Text>
                <Input
                    placeholder='Email' size='md'
                        onChange={onInputHandler}
                        type="email"
                        name="email"
                        value={email}
                        //className={css.input}
                    />
                </label>
                <label htmlFor='Password' className={css.label_form}>
                
                 <Text
                        backgroundColor='#666'
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="extrabold">
                        Password
                    </Text>
                <Input
                    placeholder='Password' size='md'
                        onChange={onInputHandler}
                        type="password"
                        name="password"
                        value={password}
                        //className={css.input}
                    />
                </label>
                <Button mt="5"  type="submit" borderColor='#666' variant="outline">Register</Button>
                   <NotificationContainer/>   
            </form>     
)


}