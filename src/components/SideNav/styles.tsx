import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  background: #0f4f6d;
  overflow: hidden;
  white-space: nowrap;
  height: 100%;
  min-height: 100vh;
  color: #999;
  display: flex;
  flex-direction: column;
  position: static;
  max-width: 250px;
`;
