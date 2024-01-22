import { createContext, useCallback, useState } from 'react';

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  console.log(register);

  const updateRegister = useCallback((info) => {
    setRegister(info);
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, updateRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
