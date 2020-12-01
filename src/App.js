import React from 'react';
import './App.css';
import Main from './components/Main';
import { MainProvider } from './context/context';

const App = ()=> {
  return (
   <MainProvider value={{name: 'Nick'}}>
      <Main/>
   </MainProvider>
  );
}

export default App;
