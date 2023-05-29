import React, { useState } from "react";
import PropTypes from 'prop-types';
import appContext from './appContext';

function ContextProvider({ children }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [spokenLanguages, setSpokenLanguages] = useState('');

  const contextValue = {
    username, 
    setUsername,
    password,
    setPassword,
    confPassword, 
    setConfPassword,
    spokenLanguages, 
    setSpokenLanguages
  };
  
  return (
    <appContext.Provider value={ contextValue }>
      { children }
    </appContext.Provider>
  );

};

ContextProvider.propTypes = { children: PropTypes.node.isRequired };

export default ContextProvider;