import React, { useEffect, useState } from 'react';
import AdBanner from '../AdBanner';
import DesktopHeader from '../DesktopHeader';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import MobileHeader from '../MobileHeader';
import RightColumn from '../RightColumn';

import { Container } from './styles';

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />
      <span>{!isLoading && <AdBanner />}</span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
};

export default Layout;
