import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { WhiteCardType } from '.';
import WhiteCardView from './WhiteCardView.react';

interface Props {
  history?: History;
  className?: string;
  children: React.ReactNode;
  header?: {
    title?: string;
    subTitle?: string;
  };
  type: WhiteCardType;
}

const WhiteCard: React.FC<Props> = (props: Props) => {
  return <WhiteCardView {...props} />;
};

WhiteCard.defaultProps = {};

export default compose<Props, Props>(withRouter)(WhiteCard);
