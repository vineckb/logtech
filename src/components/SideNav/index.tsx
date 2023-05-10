import { CollapsibleLogo } from '@/components/CollapsibleLogo';
import { SideMenu } from '@/components/SideMenu';
import { Wrapper } from './styles';
import { useSideNav } from '@/hooks/useSideNav';

export function SideNav() {
  const { open } = useSideNav();
  const initialOverflow = window.document.body.style.overflowX;

  return (
    <Wrapper
      hidden={false}
      initial={false}
      animate={{ minWidth: open ? 250 : 87 }}
      onAnimationStart={() => (window.document.body.style.overflowX = 'hidden')}
      onAnimationEnd={() =>
        (window.document.body.style.overflowX = initialOverflow)
      }
    >
      <CollapsibleLogo collapsed={!open} />

      <SideMenu />
    </Wrapper>
  );
}
