import React from 'react';
import './App.css';
import logo from './logo.svg';
import './styles/a-vendor.css';
import './styles/main.scss';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <input
          className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-1/4 appearance-none leading-normal text-gray-800'
          type='email'
          placeholder='tailwindcss works!'
        />
      </header>
    </div>
  );
}

export default App;
