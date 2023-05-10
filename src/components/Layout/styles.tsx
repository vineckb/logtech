import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  display: flex;
`;

export const PageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
