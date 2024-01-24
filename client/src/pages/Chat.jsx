import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import Navbar from '../components/Navbar';

function Chat() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className="text-red-600">logged in as: {user.data?.name} </div>
      <p onClick={() => logoutUser()}>Logout</p>;
    </>
  );
}

export default Chat;
