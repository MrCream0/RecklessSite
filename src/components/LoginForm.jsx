import React, { useState } from 'react';
import AdminWindow from './AdminWindow';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showAdminWindow, setShowAdminWindow] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
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
        setShowAdminWindow(true);
    };

    const handleAdminWindowClose = () => {
        setShowAdminWindow(false);
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                {isLoggedIn && (
                    <>
                        <button type="button" onClick={handleAdminWindowOpen}>
                            Admin Window
                        </button>
                    </>
                )}
            </form>
            {showAdminWindow && (
      <div className="">
        <div className="">
          <AdminWindow onClose={handleAdminWindowClose} />
        </div>
      </div>
    )}
        </div>
    );
};

export default LoginForm;
