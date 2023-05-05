import styled from '@emotion/styled';

export const Page = styled.div`
  background-image: url('/images/signin-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const SideImage = styled.div`
  background-image: url('/images/signin-side.png');
  flex-grow: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const FormWrapper = styled.div`
  padding: 60px;
  display: flex;
  align-items: center;
`;
