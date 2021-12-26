import { ReactNode } from 'react';
import Footer from './footer';
import Meta from './meta';

type Props = {
  // preview?: boolean;
  children: ReactNode;
};

const Layout = function ({ children }: Props) {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
