import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

function Chat() {
  const { user } = useContext(AuthContext);
  return <div className="text-red-600">logged in as: {user.data?.name} </div>;
}

export default Chat;
