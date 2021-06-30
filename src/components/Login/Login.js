import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(response => response.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });

        if(username === token.log && password === token.pass){
            setToken(token);
        } else {
            setErr('Invalid credentials. Try again.');
            setPassword('');
            setUserName('');
        }
    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label className="username">
                    <p>Username</p>
                    <input
                        type="text"
                        className="form_field"
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                    />
                </label>
                <label className="password">
                    <p>Password</p>
                    <input
                        type="password"
                        className="form_field"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                {err ? <p className="err">{err}</p> : null}
                <div>
                    <button
                        type="submit"
                        className="submit"
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}