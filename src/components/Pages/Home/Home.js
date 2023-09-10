//import ContactList from "components/ContactList/ContactList";
//import Filter from "components/Filter/Filter";
//import { InputForm } from "components/InputForm/InputForm";
//import { getLoading, getError } from "redux/tasks/selectors";
//import { useSelector } from "react-redux";
import  css  from "./Home.module.css";

export const Home = () => {
     //const isLoading = useSelector(getLoading);
  //const error = useSelector(getError);
    return (
        <div>
            <p className={css.p_style}>МНС 101</p>
            <p className={css.p_style}>Поліція 102</p>
            <p className={css.p_style}>Швидка допомога 103</p>
            
          
        </div>
       
    )
}
    
;