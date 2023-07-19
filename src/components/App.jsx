import React from 'react';
//import { InputForm } from './InputForm/InputForm';
//import Filter from './Filter/Filter';
//import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUrl } from 'redux/tasks/operations';
//import { getError, getLoading } from 'redux/tasks/selectors';
import { RegisterForm } from './Register/Register';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { LogInForm } from './LogIn/LogIn';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchUrl());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PhoneBook />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/logIn" element={<LogInForm />} />
          <Route path="*" element={<PhoneBook />} />
        </Route>
      </Routes>
    </div>

    //   (
    //     <div
    //       style={{
    //         height: '100vh',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         justifyContent: 'flex-start',
    //         alignItems: 'center',
    //         fontSize: 40,
    //         color: '#010101',
    //       }}
    //     >
    //       <RegisterForm />
    //       <InputForm />
    //       <Filter />
    //       {isLoading && <b>Reqwest in process...</b>}
    //       {error && <b>Failed reqwest </b>}
    //       <ContactList />
    //     </div>
    //   )
  );
};
