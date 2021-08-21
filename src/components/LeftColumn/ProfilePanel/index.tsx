import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
          <div className="profile-cover"></div>
        <img
          src="https://github.com/joaobispo2077.png"
          alt="Avatar"
           className="profile-picture"
        />
        <h1>João Bispo</h1>
        <h2>Full stack developer at Savelivez</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.654</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">441</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
