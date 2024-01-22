import { createContext, useCallback, useState } from 'react';
import { baseURL, postRequest } from '../utils/services';

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  console.log(register);

  const updateRegister = useCallback((info) => {
    setRegister(info);
  }, []);

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

      //if no error detected, pass the response to setUser
      localStorage.setItem('User', JSON.stringify(response));

      setUser(response);
    },
    [register],
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        updateRegister,
        registerUser,
        registerError,
        isRegisterLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
