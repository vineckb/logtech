import { useNavigate } from 'react-router-dom';
import { SignInForm, SignInFormValues } from './Form';
import { FormWrapper, Page, SideImage } from './styles';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@/contexts/Auth';

export function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  function onSubmit({ email, password }: SignInFormValues) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log({ email, password });
        signIn({ email } as User, 'static-token');
        resolve();
        navigate('/dashboard');
      }, 500);
    });
  }

  return (
    <Page>
      <SideImage></SideImage>
      <FormWrapper>
        <SignInForm onSubmit={onSubmit} />
      </FormWrapper>
    </Page>
  );
}
