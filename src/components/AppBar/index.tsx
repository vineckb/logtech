import MenuIcon from 'hamburger-react';

interface Props {
  open: boolean;
  buttonProps: object;
}

export function AppBar({ open, buttonProps }: Props) {
  return (
    <div className="appBar">
      <button {...buttonProps}>
        <MenuIcon toggled={open} />
      </button>
    </div>
  );
}
