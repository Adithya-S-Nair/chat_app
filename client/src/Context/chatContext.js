import { createContext, useState } from "react";

export const ChatContext = createContext();

export function ChatContextProvider({ children }) {
    const [selectedChat, setSelectedChat] = useState(null);
    return (
        <ChatContext.Provider value={{ selectedChat, setSelectedChat }}>
            {children}
        </ChatContext.Provider>
    );
}
