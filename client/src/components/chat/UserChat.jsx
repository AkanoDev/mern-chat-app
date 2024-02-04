import { useContext } from 'react';
import { useFetchRecipientUser } from '../../hooks/useFetchRecipientUser';
import { ChatContext } from '../../context/ChatContext';

function UserChat({ chat, user }) {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  const { onlineUsers } = useContext(ChatContext);

  // const isOnline = onlineUsers?.some(
  //   (user) => user?.userId === recipientUser?._id,
  // );

  return (
    <div className="flex gap-3 items-center justify-between lg:w-96 w-12 mb-3 p-1 border border-black border-t-0 border-r-0 border-l-0">
      <div className="flex lg:flex-row flex-col items-center gap-2">
        <div className="w-11 h-11 rounded-full bg-blue-100"></div>
        <div>
          <div className="flex gap-1">
            <span
              className={
                onlineUsers?.some((user) => user?.userId === recipientUser?._id)
                  ? 'online-users'
                  : ''
              }
            ></span>
            <span className="font-semibold">{recipientUser?.name}</span>
          </div>
          <div className="lg:flex hidden opacity-80">text message...</div>
        </div>
      </div>
      <div className="lg:flex lg:flex-col hidden items-end gap-2">
        <div className="text-sm">12-12-12</div>
        <div className="user-notification">2</div>
      </div>
    </div>
  );
}

export default UserChat;
