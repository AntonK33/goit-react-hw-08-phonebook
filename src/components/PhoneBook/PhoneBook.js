import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { InputForm } from "components/InputForm/InputForm";
import { getLoading, getError } from "redux/tasks/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUrl } from "redux/tasks/operations";


export const PhoneBook = () => {
    const dispatch = useDispatch();
    useEffect(()=>{ dispatch(fetchUrl())
    },[dispatch])
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