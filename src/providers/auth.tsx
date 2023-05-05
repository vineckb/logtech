import AuthContext, { User } from '@/contexts/auth';
import { ReactElement, useEffect, useState } from 'react';

interface AuthProviderProps {
  children?: ReactElement;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const storedToken = localStorage.getItem('@App:token');
  const storedUser = localStorage.getItem('@App:user');

  const [signed, setSigned] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    if (storedToken && storedUser) {
      signIn(JSON.parse(storedUser), storedToken);
    }
  }, [storedToken, storedUser]);

  function signIn(user: User, token: string) {
    setUser(user);
    setToken(token);
    setSigned(true);

    localStorage.setItem('@App:user', JSON.stringify(user));
    localStorage.setItem('@App:token', token);
  }

  function signOut() {
    setUser(null);
    setToken('');
    setSigned(false);

    localStorage.removeItem('@App:user');
    localStorage.removeItem('@App:token');
  }

  const context = { signed, user, token, signIn, signOut };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
