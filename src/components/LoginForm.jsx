import React, { useState } from 'react';
import AdminWindow from './AdminWindow';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAdminWindow, setShowAdminWindow] = useState(false);

  let navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://zurgngz.xyz/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Store the token in local storage
        localStorage.setItem('token', token);

        setIsLoggedIn(true);
        console.log('Login successful');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }

    setUsername('');
    setPassword('');
  };

  const handleAdminWindowOpen = () => {
    //setShowAdminWindow(true);
    navigate('/admin');
  };

  const handleAdminWindowClose = () => {
    setShowAdminWindow(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-auto h-auto bg-[#353535]">
        <div className="bg-black p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 text-red-500">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-white">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
                className="w-full px-4 py-2 mt-2 rounded bg-red-500 text-white placeholder-white border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-white">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full px-4 py-2 mt-2 rounded bg-red-500 text-white placeholder-white border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 mt-4 text-white bg-red-700 rounded-md shadow-lg hover:bg-red-800"
            >
              Submit
            </button>
            {isLoggedIn && (
              <button
                type="button"
                onClick={handleAdminWindowOpen}
                className="w-full px-6 py-3 mt-4 text-white bg-black rounded-md shadow-lg hover:bg-gray-800"
              >
                Admin Window
              </button>
            )}
          </form>
        </div>
      </div>
      <div className="">
      {showAdminWindow && (
          <div className="mt-4">
            <AdminWindow onClose={handleAdminWindowClose} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
