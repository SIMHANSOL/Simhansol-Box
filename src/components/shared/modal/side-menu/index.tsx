import type { HTMLAttributes } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Dialog } from './style';

export interface SideMenuRef {
  menuOpen: () => void;
  menuClose: () => void;
}

interface SideMenuProps extends HTMLAttributes<HTMLDialogElement> {}

const SideMenu = forwardRef<SideMenuRef, SideMenuProps>((props, ref) => {
  const { children, ...restProps } = props;

  const sideMenuRef = useRef<HTMLDialogElement>(null);

  function menuOpen() {
    sideMenuRef.current?.showModal();
    document.body.style.overflow = 'hidden';
  }

  function menuClose() {
    sideMenuRef.current?.close();
    document.body.style.overflow = 'auto';
  }

  useImperativeHandle(ref, () => ({
    menuOpen,
    menuClose,
  }));

  return (
    <Dialog
      ref={sideMenuRef}
      onClick={(event) => (event.target === sideMenuRef.current ? menuClose() : null)}
      {...restProps}>
      {children}
    </Dialog>
  );
});

SideMenu.displayName = 'SideMenu';
export default SideMenu;
