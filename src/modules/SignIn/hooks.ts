import { api } from '@/services/api';
import { useMutation } from '@tanstack/react-query';

interface Credentials {
  user: string;
  password: string;
}

export function useSignIn() {
  return useMutation({
    mutationKey: ['signin'],
    mutationFn: (credentials: Credentials) =>
      api.post('/authorization', credentials),
  });
}
