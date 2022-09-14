import React from 'react'
import './App.scss';
import Header from './components/Header/Header.jsx'
import MainContent from './components/MainContent/MainContent.jsx'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className='slider'></div>
      <MainContent />
    </div>
  );
}

export default App;
