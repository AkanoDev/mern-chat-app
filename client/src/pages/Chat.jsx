import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext';
import Navbar from '../components/Navbar';
import { ChatContext } from '../context/ChatContext';
import UserChat from '../components/chat/UserChat';

function Chat() {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatLoading, userChatsError } =
    useContext(ChatContext);
  return (
    <div className="h-screen">
      <div className="flex flex-col bg-red-100 h-full">
        <Navbar />
        <div className="flex gap-12 p-8 h-full">
          <div>
            {userChats?.length < 1 ? null : (
              <div>
                {isUserChatLoading && <p>chat loading..</p>}
                {userChats?.map((chat, index) => {
                  return <UserChat chat={chat} user={user} key={user?._id} />;
                })}
              </div>
            )}
          </div>
          <div className="flex justify-center items-center w-full h-full bg-green-100">
            <div className=" bg-yellow-200">
              <div className="w-6/12">message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
