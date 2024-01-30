import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext';
import Navbar from '../components/Navbar';
import { ChatContext } from '../context/ChatContext';
import UserChat from '../components/chat/UserChat';
import PotentialChats from '../components/chat/potentialChats';
import ChatBox from '../components/chat/ChatBox';

function Chat() {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatLoading, updateCurrentChat } =
    useContext(ChatContext);
  return (
    <div className="h-screen">
      <div className="flex flex-col bg-red-100 h-full">
        <Navbar />
        <div className="flex gap-12 p-8 h-full w-screen">
          <PotentialChats />
          {userChats?.length < 1 ? null : (
            <div className="flex gap-4 w-full">
              <div>
                {isUserChatLoading && <p>chat loading..</p>}
                {userChats?.map((chat, index) => {
                  return (
                    <div
                      className="cursor-pointer"
                      key={index}
                      onClick={() => updateCurrentChat(chat)}
                    >
                      <UserChat chat={chat} user={user} />
                    </div>
                  );
                })}
              </div>
              <div className="w-full">
                <ChatBox />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
