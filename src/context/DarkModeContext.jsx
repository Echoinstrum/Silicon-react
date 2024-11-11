import { createContext, useContext, useState } from "react";

export const DarkModeContext = createContext();

// eslint-disable-next-line react/prop-types
export const DarkModeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);
    return( 
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => useContext(DarkModeContext)