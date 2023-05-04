import MenuIcon from 'hamburger-react';

interface Props {
  open: boolean;
  buttonProps: object;
}

export function AppBar({ open, buttonProps }: Props) {
  return (
    <div className="appBar">
      <button {...buttonProps} style={{ float: 'right' }}>
        <MenuIcon toggled={open} />
      </button>
    </div>
  );
}