import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

function Chat() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <div className="text-red-600">logged in as: {user.data?.name} </div>
      <p onClick={() => logoutUser()}>Logout</p>;
    </>
  );
}

export default Chat;
