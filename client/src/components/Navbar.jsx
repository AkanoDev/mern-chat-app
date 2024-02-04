import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { RxHamburgerMenu } from 'react-icons/rx';

function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);

  const toggleUserMenu = () => {
    setShowUserMenu((prev) => !prev);
  };
  return (
    <header className="header flex justify-between items-center px-10 h-16">
      <img
        src="./../public/images/logo-fruit.png"
        alt="logo"
        className="w-32"
      />
      <nav className="relative">
        <ul>
          <RxHamburgerMenu onClick={toggleUserMenu} className="text-2xl" />
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
