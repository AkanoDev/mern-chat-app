import { Routes, Route, Navigate } from 'react-router-dom';
import Chat from './pages/Chat';
import Register from './pages/Register';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import { ChatContextProvider } from './context/ChatContext';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <ChatContextProvider user={user}>
      <Routes>
        <Route path="/" element={user ? <Chat /> : <Login />} />
        <Route path="/register" element={user ? <Chat /> : <Register />} />
        <Route path="/login" element={user ? <Chat /> : <Login />} />
        <Route path="*" element={<Navigate />} />
      </Routes>
    </ChatContextProvider>
  );
}

export default App;
