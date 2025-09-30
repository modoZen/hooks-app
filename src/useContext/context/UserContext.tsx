import {
  createContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import { users, type User } from "../data/user.mock";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  authStatus: AuthStatus;
  user: User | null;

  login: (userId: number) => boolean;
  logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }
    setUser(user);
    setAuthStatus("authenticated");
    return true;
  };

  const handleLogout = () => {
    setUser(null);
    setAuthStatus("not-authenticated");
    console.log("logout");
  };

  return (
    <UserContext
      value={{
        authStatus,
        user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
