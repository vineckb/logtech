import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Logo,
  Form,
  Version,
  SubmitButton,
  FormInput,
  ErrorMessage,
} from './styles';

const signinSchema = z.object({
  user: z.string().min(2, 'Informe um usuário válido'),
  password: z.string().min(1, 'Informe a senha'),
});

export type SignInFormValues = z.infer<typeof signinSchema>;

interface Props {
  onSubmit: SubmitHandler<SignInFormValues>;
  error?: string;
}

export function SignInForm({ onSubmit, error }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signinSchema),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <Version>Versão 1.0.2</Version>
      <FormControl isInvalid={!!errors.user} mb={4}>
        <FormInput placeholder="Usuário" {...register('user')} />
        <FormErrorMessage color="#f1e3e3">
          {errors.user && errors.user.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <FormInput
          type="password"
          placeholder="Senha"
          {...register('password')}
        />
        <FormErrorMessage color="#f1e3e3">
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SubmitButton mt={4} isLoading={isSubmitting} type="submit">
        Entrar
      </SubmitButton>
    </Form>
  );
}
