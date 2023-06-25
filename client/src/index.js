import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Context
import { UserContextProvider } from './Context/userContext';
import { ChatContextProvider } from './Context/chatContext';
import { WSContextProvider } from './Context/wsContext';
import { MessageContextProvider } from './Context/messageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <WSContextProvider>
      <ChatContextProvider>
        <MessageContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </MessageContextProvider>
      </ChatContextProvider>
    </WSContextProvider>
  </UserContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
