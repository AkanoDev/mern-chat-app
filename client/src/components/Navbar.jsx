import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';

function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);

  const toggleUserMenu = () => {
    setShowUserMenu((prev) => !prev);
  };
  return (
    <header className="flex justify-between items-center bg-yellow-100 px-10 h-12 ">
      <span>Logo</span>
      <nav className="relative">
        <ul>
          <li onClick={toggleUserMenu}>box</li>
        </ul>
        <div className={`user-menu ${showUserMenu ? 'show' : ''}`}>
          <h2 className="h-12 bg-blue-100 p-2 mb-4 rounded-lg shadow-md shadow-black/20">
            {user?.name}
          </h2>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li onClick={() => logoutUser()}>Logout</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
