import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
