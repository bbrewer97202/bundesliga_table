import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppNavigation from '../AppNavigation/AppNavigation';
import TablePage from '../../pages/TablePage';
import LeagueListPage from '../../pages/LeagueListPage';
import TeamPage from '../../pages/TeamPage';
import MatchesPage from '../../pages/MatchesPage';
import * as Styled from './App-styles';

const App = () => {
  const { Body, PageView } = Styled;
  return (
    <Body>
      <Router>
        <AppNavigation />
        <PageView>
          <Route exact path="/" component={TablePage} />
          <Route exact path="/teams" component={LeagueListPage} />
          <Route exact path="/teams/:teamId" component={TeamPage} />
          <Route exact path="/matches" component={MatchesPage} />
        </PageView>
      </Router>
    </Body>
  );
};

export default App;
