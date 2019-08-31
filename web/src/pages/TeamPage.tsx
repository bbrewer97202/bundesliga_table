import React from 'react';
import Team from '../components/Team';
import fpo from '../data/B04.json';

const TeamPage: React.FC = () => {
  return <Team team={fpo} />;
};

export default TeamPage;
