import styled from '@emotion/styled';
import { ReactComponent as LogoSVG } from '@/assets/logo-white.svg';
import { Button, Input } from '@chakra-ui/react';

export const Form = styled.form`
  background: #004e6c;
  width: 425px;
  padding: 60px;
  border-radius: 30px;
`;

export const Logo = styled(LogoSVG)`
  margin-top: 20px;
`;

export const Version = styled.p`
  color: rgba(233, 233, 233, 0.5);
  font-size: 16px;
  text-align: center;
  margin-bottom: var(--chakra-space-12);
`;

export const SubmitButton = styled(Button)`
  background: #44537a;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  font-weight: normal;
  font-size: 12px;
  padding: 20px;
  margin-bottom: 60px;

  &:hover {
    background: #637196;
  }
`;

export const FormInput = styled(Input)`
  background: #f8f8fb;
  color: rgba(0, 0, 0, 0.7);

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &[aria-invalid='true'],
  &[data-invalid] {
    border: none;
    box-shadow: 0 0 0 1px #fff;
    background: #e4bbbb;

    &::placeholder {
      color: #e53e3e;
    }
  }
`;
