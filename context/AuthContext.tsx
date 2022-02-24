import useUser from "hooks/useUser";
import { createContext, useContext } from "react";
import { User } from "types/User";

export type AuthContext = {
  user: User | null;
  isLoading: boolean;
  isLogin: boolean;
};

const AuthContext = createContext<AuthContext>({
  user: null,
  isLoading: true,
  isLogin: false,
});

export const useAuthContext = () => useContext(AuthContext);

export type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }) => {
  const { data, isLoading } = useUser();

  return (
    <AuthContext.Provider
      value={{
        user: data,
        isLoading,
        isLogin: Boolean(!isLoading && data && data.isLogin),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
