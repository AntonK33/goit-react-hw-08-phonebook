import { useState } from "react"
import { useDispatch } from "react-redux";
import css from "./LogIn.module.css"
import { logIn } from "redux/auth/operations";
import { Button, Text, Input,
} from "@chakra-ui/react";
import { NotificationContainer, NotificationManager } from "react-notifications";
import 'react-notifications/lib/notifications.css';

export const LogInForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

     const onInputHandler = (event) => {
        const { name, value } = event.target;
        switch (name) {
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
        dispatch(logIn({ email, password }))
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
            <Button type="submit" borderColor='#666' variant="outline">
                <Text 
                        
                        backgroundColor='#666'
                        bgClip="text"
                        fontSize="2xl"
                        fontWeight="extrabold"
                    >Log In</Text>
                
            </Button>
                    <NotificationContainer/>  
            </form>     
)


}