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
      <div className="chat-bg flex flex-col bg-green-100 h-full">
        <Navbar />
        <div className="flex gap-12 p-8 h-full w-screen">
          {userChats?.length < 1 ? null : (
            <div className="flex gap-4 w-full">
              <div className="contact-list p-2">
                <PotentialChats />
                {isUserChatLoading && <p>chat loading..</p>}
                {userChats?.map((chat, index) => {
                  return (
                    <div
                      className="cursor-pointer mt-6"
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
