import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('log');
        const userToken = JSON.parse(tokenString);
        return userToken
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('log', JSON.stringify(userToken.log));
        setToken(userToken.log);
    };

    return {
        setToken: saveToken,
        token
    }
}