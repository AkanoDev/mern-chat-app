import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { ChatContext } from '../../context/ChatContext';
import { useFetchRecipientUser } from '../../hooks/useFetchRecipientUser';
import moment from 'moment';
import InputEmoji from 'react-input-emoji';

function ChatBox() {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);
  const [textMessage, setTextMessage] = useState('');

  console.log('text', textMessage);

  if (!recipientUser)
    return (
      <p className="text-center w-full">No conversation selected yet...</p>
    );

  if (isMessagesLoading)
    return <p className="text-center w-full">Loading chat...</p>;

  return (
    <div className="chat-box gap-4">
      <div className="chat-header">
        <strong>{recipientUser?.name}</strong>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="messages">
          {messages &&
            messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message?.senderId === user?._id
                    ? 'message self self-end'
                    : 'message self-start'
                }`}
              >
                <p>{message.text}</p>
                <span>{moment(message.createdAt).calendar()}</span>
              </div>
            ))}
        </div>
        <div className="chat-input">
          <InputEmoji value={textMessage} onChange={setTextMessage} />
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
