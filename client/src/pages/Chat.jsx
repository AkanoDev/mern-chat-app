import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext';
import Navbar from '../components/Navbar';
import { ChatContext } from '../context/ChatContext';

function Chat() {
  const { user, logoutUser } = useContext(AuthContext);
  const { userChats, isUserChatLoading, userChatsError } =
    useContext(ChatContext);
  console.log('UserChats', userChats);
  console.log('Is User Chat Loading:', isUserChatLoading);
  console.log('User Chats Error:', userChatsError);
  return (
    <>
      <Navbar />
      <div className="text-red-600">logged in as: {user?.name} </div>
      {isUserChatLoading && <p>Loading user chats...</p>}
      {userChatsError && (
        <p>Error loading user chats: {userChatsError.message}</p>
      )}

      <p onClick={() => logoutUser()}>Logout</p>
    </>
  );
}

export default Chat;
