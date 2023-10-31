import React, {useState, useContext, createContext} from 'react';

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState({});


    return(
        <UserContext.Provider value ={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUserContext = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("Ta mal esto")
    } else {
        return context
    }
}