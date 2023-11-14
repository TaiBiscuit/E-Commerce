import React, {useState, useContext, createContext} from 'react';

export const SavedContext = createContext();

export const SavedContextProvider = ({children}) => {

    const [saved, setSaved] = useState([]);


    return(
        <SavedContext.Provider value ={{ saved, setSaved}}>
            {children}
        </SavedContext.Provider>
    )
}


export const useSavedContext = () => {
    const context = useContext(SavedContext);
    if(!context){
        throw new Error("Ta mal esto")
    } else {
        return context
    }
}