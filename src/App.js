import React from 'react';
import './App.scss';
import Dialogs from './Components/Dialogs';
import Header from './Components/Header';
import Letter from './Components/Letter';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className="container">
      <div className="app-wraper">
        <Header />
        <div className='app-wraper-content'>
           <Navbar />
           <Dialogs />
           <Letter />
        </div>
      </div>
    </div>
  );
}

export default App;
