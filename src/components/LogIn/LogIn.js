import { useState } from "react"
import { useDispatch } from "react-redux";
import css from "./LogIn.module.css"
import { logIn } from "redux/auth/operations";

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
        dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');
    }
    return (
      <form
               className={css.form}
                onSubmit={regiserSend}>
                <label htmlFor='Email' className={css.label_form}>
                    <span>Email</span>
                    <input
                        onChange={onInputHandler}
                        type="email"
                        name="email"
                        value={email}
                        className={css.input}
                    />
                </label>
                <label htmlFor='Password' className={css.label_form}>
                    <span>Password</span>
                    <input
                        onChange={onInputHandler}
                        type="password"
                        name="password"
                        value={password}
                        className={css.input}
                    />
                </label>
                <button type="submit" className={css.addBtn}>Log In</button>
                      
            </form>     
)


}