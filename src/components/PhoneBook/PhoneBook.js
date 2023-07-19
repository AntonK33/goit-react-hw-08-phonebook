import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { InputForm } from "components/InputForm/InputForm";
import { getLoading, getError } from "redux/tasks/selectors";
import { useSelector } from "react-redux";


export const PhoneBook = () => {
     const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
    return (
        <div>
             <InputForm />
        <Filter />
        {isLoading && <b>Reqwest in process...</b>}
        {error && <b>Failed reqwest </b>}
        <ContactList/>
        </div>
       
    )
}
    
;