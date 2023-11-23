import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('GeneralFan'); // default role

  const updateUserRole = (newRole) => {
    setUserRole(newRole);
  };

  return (
    <UserContext.Provider value={{ userRole, updateUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => { //so that other functions can use the context
    return useContext(UserContext);
  };