import React from 'react';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingTrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="square-skeleton white" />
        <div className="column">
          <Skeleton className="row-skeleton white" />
          <Skeleton className="row-skeleton white" />
        </div>
      </Panel>
    </Container>
  );
};

export default LoadingTrendingPanel;
