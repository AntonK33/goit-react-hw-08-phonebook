import React from 'react';
//import { InputForm } from './InputForm/InputForm';
//import Filter from './Filter/Filter';
//import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
//import { fetchUrl } from 'redux/tasks/operations';
//import { getError, getLoading } from 'redux/tasks/selectors';
import { RegisterForm } from './Register/Register';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { LogInForm } from './LogIn/LogIn';
import { refreshUser } from 'redux/auth/operations';
import { Home } from './Pages/Home/Home';
import {PrivateRoute} from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { ChakraProvider } from '@chakra-ui/react'


export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getLoading);
  // const error = useSelector(getError);
// const test = (value)=>{
// console.log(test);
// };
  useEffect(()=>{
    dispatch(refreshUser());
  },[dispatch]);

  return (

     <ChakraProvider>
      <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          
            <Route
              path="/register"
              element={
          <RestrictedRoute redirectTo = '/phoneBook' component={<RegisterForm />}/>
          } />
            <Route
              path="/logIn"
              element={
          <RestrictedRoute redirectTo = '/phoneBook' component={<LogInForm />}/>
          } />
            <Route
              path="/phoneBook"
              element={
              <PrivateRoute redirectTo = '/logIn' component={<PhoneBook/>}/>
              }/>
          {/* <Route path="*" element={<Home />}/>        */}
        </Route>
        
      </Routes>
    </div>
    </ChakraProvider>
   
      /* <Route path="/phoneBook" element={<PhoneBook />} /> */
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
