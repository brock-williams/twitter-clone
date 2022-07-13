import React, { createContext, useEffect, useState } from 'react'
import App from './App';

export const UserContext = createContext();

export const UserProvider = (({children}) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        App.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
    }, []);

    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
})

export default UserContext;