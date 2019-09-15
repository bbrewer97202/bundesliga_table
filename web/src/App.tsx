import React from 'react';
import Styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AppNavigation from './components/AppNavigation';
import TablePage from './pages/TablePage';
import AllTeamsPage from './pages/AllTeamsPage';
import TeamPage from './pages/TeamPage';
import MatchesPage from './pages/MatchesPage';

const App: React.FC = () => {
  return (
    <Body>
      <Router>
        <AppNavigation />
        <PageView>
          <Route exact path="/" component={TablePage} />
          <Route exact path="/teams" component={AllTeamsPage} />
          <Route exact path="/teams/:teamId" component={TeamPage} />
          <Route exact path="/matches" component={MatchesPage} />
        </PageView>
      </Router>
    </Body>
  );
};

const Body = Styled.main`
  background-color: #fff;
`;

const PageView = Styled.article`
  margin: 20px auto;
  background-color: white;
  padding: 20px;
  max-width: 960px;
`;

export default App;
