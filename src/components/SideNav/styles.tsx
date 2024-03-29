import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  background: #0f4f6d;
  overflow: hidden;
  white-space: nowrap;
  height: 100vh;
  color: #999;
  display: flex;
  flex-direction: column;
  position: fixed;
  max-width: 250px;
  z-index: 999;
`;
