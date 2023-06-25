import { createContext, useState } from "react";

export const WSContext = createContext();

export function WSContextProvider({ children }) {
    const [ws, setWs] = useState(null);
    return (
        <WSContext.Provider value={{ ws, setWs }}>
            {children}
        </WSContext.Provider>
    );
}
