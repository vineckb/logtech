import { CollapsibleLogo } from '../CollapsibleLogo';
import { SideMenu } from '../SideMenu';
import { Wrapper } from './styles';

interface Props {
  open: boolean;
}

export function SideNav({ open }: Props) {
  const initialOverflow = window.document.body.style.overflowX;

  return (
    <Wrapper
      hidden={false}
      initial={false}
      animate={{ width: open ? 250 : 87 }}
      onAnimationStart={() => (window.document.body.style.overflowX = 'hidden')}
      onAnimationEnd={() =>
        (window.document.body.style.overflowX = initialOverflow)
      }
    >
      <CollapsibleLogo collapsed={!open} />

      <SideMenu open={open} />
    </Wrapper>
  );
}
