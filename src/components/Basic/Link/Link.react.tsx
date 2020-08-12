import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { LinkType } from '.';
import LinkView from './LinkView.react';

interface Props {
  history?: History;
  to: string;
  children: React.ReactNode;
  className?: string;
  type?: LinkType;
}

const Link: React.FC<Props> = (props: Props) => {
  return <LinkView {...props} />;
};

Link.defaultProps = {};

export default compose<Props, Props>(withRouter)(Link);
