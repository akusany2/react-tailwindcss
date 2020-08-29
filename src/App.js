import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { UserInfoContext } from './context';
import logo from './logo.svg';
import { auth } from './service/firebase.service';
import './styles/a-vendor.css';
import './styles/main.scss';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const loggedUser = useContext(UserInfoContext);

  function login() {
    setAuthError('');
    auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        setAuthError(err.message);
        console.log(err);
      });

    // setEmail('');
    // setPassword('');
  }

  function signTheHellOut() {
    auth
      .signOut()
      .then(() => {})
      .catch((err) => console.log(err));
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='/dashboard'>Dashboard</Link>
        <img src={logo} className='App-logo' alt='logo' />
        {loggedUser && (
          <p className='mb-8'>User loggedIn: {loggedUser.email}</p>
        )}
        {authError ? (
          <span className='text-sm text-red-600'>{authError}</span>
        ) : null}
        {!loggedUser && (
          <>
            <input
              className='mb-8 mt-8 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-1/4 appearance-none leading-normal text-gray-800'
              type='email'
              placeholder='Firstname'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='mb-8 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-1/4 appearance-none leading-normal text-gray-800'
              type='email'
              placeholder='Lastname'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

        <div>
          {!loggedUser && (
            <button
              className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
              onClick={() => login()}
            >
              Login
            </button>
          )}
          {loggedUser && (
            <button
              className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
              onClick={() => signTheHellOut()}
            >
              Logout
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
