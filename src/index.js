import React, { StrictMode, createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import ContextProvider from "./components/context/ContextProvider";


export const Context  = createContext();


const AppWrapper = () =>{
  const [isAuthenticatedEmploye , setIsAuthenticatedEmploye] = useState(false);// this one is for patient
  const [isAuthenticatedBoss , setIsAuthenticatedBoss] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  
  return(
    <Context.Provider value={{
      isAuthenticatedEmploye , setIsAuthenticatedEmploye,
      isAuthenticatedBoss , setIsAuthenticatedBoss,
      loading,setLoading,
      user,setUser
    }}>
    <App />
    </Context.Provider> 
  );
}


ReactDOM.render(
  
    <BrowserRouter>
    <AppWrapper/>
    </BrowserRouter>
  
  ,
  document.getElementById('root')
);

