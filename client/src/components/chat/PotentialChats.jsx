import { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { AuthContext } from '../../context/authContext';

function PotentialChats() {
  const { user } = useContext(AuthContext);
  const { potentialChats, creatChat } = useContext(ChatContext);
  console.log('userrr', user);
  return (
    <div>
      {potentialChats &&
        potentialChats.map((u, index) => {
          return (
            <div key={index} onClick={() => creatChat(user._id, u._id)}>
              <div className="w-12 h-12  rounded-full bg-slate-500 relative">
                <div className="w-3 h-3  rounded-full border border-white bg-green-500 absolute right-0 top-0"></div>
              </div>
              <li className="list-none flex gap-1">{u.name}</li>
            </div>
          );
        })}
    </div>
  );
}

export default PotentialChats;
