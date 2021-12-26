import { ReactNode, FunctionComponent } from 'react';

type Props = {
  children?: ReactNode;
};

const ContainerWithoutPadding: FunctionComponent = ({ children }: Props) => {
  return <div className='container px-0'>{children}</div>;
};

export default ContainerWithoutPadding;
