import type { WithRouterProps } from 'next/dist/client/with-router';
import NextLink from 'next/link';
import { withRouter } from 'next/router';
import type { HTMLAttributes, ReactNode } from 'react';

interface IProps extends HTMLAttributes<HTMLAnchorElement>, WithRouterProps {
  href: string;
  children: ReactNode;
}

function Link(props: IProps) {
  const { router, children, className, ...restProps } = props;

  let newClassName = className;
  if (router.asPath === restProps.href) {
    newClassName = `${className} active`;
  }

  return (
    <NextLink
      className={newClassName}
      {...restProps}>
      {children}
    </NextLink>
  );
}

export default withRouter(Link);
