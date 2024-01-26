import { createContext, useEffect, useState } from 'react';
import { baseURL, getRequest } from '../utils/services';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatLoading, setIsUserChatLoading] = useState(false);
  const [userChatsError, setUserChatsError] = useState(null);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?.id) {
        setIsUserChatLoading(true);
        setUserChatsError(null);

        const response = await getRequest(`${baseURL}/chats/${user?.id}`);
        console.log('Response:', response);

        setIsUserChatLoading(false);

        if (response.error) {
          return setUserChatsError(response);
        }
        console.log('User Chats Data:', response);
        setUserChats(response);
      }
    };
    getUserChats();
  }, [user]);

  return (
    <ChatContext.Provider
      value={{ userChats, isUserChatLoading, userChatsError }}
    >
      {children}
    </ChatContext.Provider>
  );
};
