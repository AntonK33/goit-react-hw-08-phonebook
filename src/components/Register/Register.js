import { useState } from "react"
import { useDispatch } from "react-redux";
import  css  from "./Register.module.css";
import { register } from "redux/auth/operations";

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
    // const send = () => {
        
    // }

    const regiserSend = (e) => {
       e.preventDefault(); 
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');

    }
    return (
      <form
               className={css.form}
                onSubmit={regiserSend}>
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
                <button type="submit" className={css.addBtn}>Register</button>
                      
            </form>     
)


}