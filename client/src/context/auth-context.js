import React, {createContext} from 'react';


export default createContext({
    token: null,
    userId: null,
    login: (token, userId, tokenExpiration) => {},
    logout: (token, userId, tokenExpiration) =>{},
});