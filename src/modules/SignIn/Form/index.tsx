import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Logo, Form, Version, SubmitButton, FormInput } from './styles';

const signinSchema = z.object({
  email: z.string().email('Informe o e-mail válido'),
  password: z.string().min(1, 'Informe a senha'),
});

export type SignInFormValues = z.infer<typeof signinSchema>;

interface Props {
  onSubmit: SubmitHandler<SignInFormValues>;
}

export function SignInForm({ onSubmit }: Props) {
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
      <FormControl isInvalid={!!errors.email} mb={4}>
        <FormInput placeholder="E-mail" {...register('email')} />
        <FormErrorMessage color="#f1e3e3">
          {errors.email && errors.email.message}
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

      <SubmitButton mt={4} isLoading={isSubmitting} type="submit">
        Entrar
      </SubmitButton>
    </Form>
  );
}
