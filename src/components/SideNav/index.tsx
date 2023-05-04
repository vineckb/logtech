import React from 'react';
import { motion } from 'framer-motion';
import { CollapsibleLogo } from '../CollapsibleLogo';
import { SideMenu } from '../SideMenu';

interface Props {
  open: boolean;
}

export function SideNav({ open }: Props) {
  const initialOverflow = window.document.body.style.overflowX;

  return (
    <motion.div
      hidden={false}
      initial={false}
      animate={{ width: open ? 250 : 87 }}
      onAnimationStart={() => (window.document.body.style.overflowX = 'hidden')}
      onAnimationEnd={() =>
        (window.document.body.style.overflowX = initialOverflow)
      }
      style={{
        background: '#0F4F6D',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        left: '0',
        height: '100vh',
        top: '0',
        color: '#999',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CollapsibleLogo collapsed={!open} />

      <SideMenu open={open} />
    </motion.div>
  );
}
