import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInForm, SignInFormValues } from './Form';
import { FormWrapper, Page, SideImage } from './styles';
import { useAuth } from '@/hooks/useAuth';
import { useSignIn } from './hooks';
import { parseJwt } from '@/utils/parse-jwt';

export function SignIn() {
  const navigate = useNavigate();
  const { mutate: doSignIn } = useSignIn();
  const { signIn } = useAuth();
  const [error, setError] = useState<string>('');

  async function onSubmit(credentials: SignInFormValues) {
    return new Promise<void>((resolve, reject) => {
      doSignIn(credentials, {
        onError: (e) => {
          setError('Algo deu errado! Tente novamente mais tarde.');
        },
        onSuccess(response) {
          if (!response) {
            setError('Usuário ou senha incorretos');
            return;
          }
          const { token } = response.data.content;
          const user = parseJwt(token);
          signIn(
            {
              id: user.UserID,
              // @todo: remove hardcoded values
              name: 'Vinicius Borges',
              email: 'vineckb@gmail.com',
            },
            token
          );
          resolve();
          navigate('/painel');
        },
      });
    });
  }

  return (
    <Page>
      <SideImage />
      <FormWrapper>
        <SignInForm onSubmit={onSubmit} error={error} />
      </FormWrapper>
    </Page>
  );
}
