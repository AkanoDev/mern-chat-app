import { createContext, useCallback, useEffect, useState } from 'react';
import { baseURL, postRequest } from '../utils/services';

// Create an authentication context
export const AuthContext = createContext();

// AuthContextProvider component to manage authentication state
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  // State for Registration Form:
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [LoginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  // State for login Form:
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  //whenever the application first load we get that user information to the local storage then add the user to the state
  useEffect(() => {
    const user = localStorage.getItem('User');

    setUser(JSON.parse(user));
  }, []);

  console.log('User', user);
  console.log('Login', login);

  //This function is intended to update the "register" state based on the provided "info" parameter.
  const updateRegister = useCallback((info) => {
    setRegister(info);
  }, []);

  const updateLogin = useCallback((info) => {
    setLogin(info);
  }, []);

  //useCallback() is a storage of data that might use for future purposes
  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();

      setIsRegisterLoading(true);
      setRegisterError(null);

      const response = await postRequest(
        `${baseURL}/users/register`,
        JSON.stringify(register),
      );

      setIsRegisterLoading(false);

      if (response.error) {
        return setRegisterError(response);
      }

      //stores the user data in local storage if successful.
      localStorage.setItem('User', JSON.stringify(response)); //"User" is just a key we can call it whatever we want

      setUser(response);
    },
    [register],
  );

  const logoutUser = useCallback(() => {
    localStorage.removeItem('User');
    setUser(null);
  }, []);

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();

      setIsLoginLoading(true);
      setLoginError(null);

      const response = await postRequest(
        `${baseURL}/users/login`,
        JSON.stringify(login),

        setIsLoginLoading(false),
      );

      if (response.error) {
        return setLoginError(response);
      }

      localStorage.setItem('User', JSON.stringify(response)); //"User" is just a key we can call it whatever we want

      setUser(response);
    },
    [login],
  );

  //Returns JSX that wraps the child components in the "AuthContext.Provider"
  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        updateRegister,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,

        //login
        login,
        updateLogin,
        LoginError,
        isLoginLoading,
        loginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
