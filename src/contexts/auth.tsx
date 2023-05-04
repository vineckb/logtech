import { createContext } from 'react';

export interface AuthContextType {
  signed: boolean;
  setSigned: (signed: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  signed: false,
  setSigned: (signed: boolean) => {},
});

export default AuthContext;
