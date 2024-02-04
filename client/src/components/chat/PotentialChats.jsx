import { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { AuthContext } from '../../context/authContext';

function PotentialChats() {
  const { user } = useContext(AuthContext);
  const { potentialChats, creatChat, onlineUsers } = useContext(ChatContext);

  return (
    <div>
      {potentialChats &&
        potentialChats.map((u, index) => {
          return (
            <div
              key={index}
              onClick={() => creatChat(user._id, u._id)}
              className="potential-chat p-2 flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-slate-500 relative">
                <div
                  className={
                    onlineUsers?.some((user) => user?.userId === u?._id)
                      ? 'online-users'
                      : ''
                  }
                ></div>
              </div>
              <li className="list-none flex gap-1 text-center">{u.name}</li>
            </div>
          );
        })}
    </div>
  );
}

export default PotentialChats;
