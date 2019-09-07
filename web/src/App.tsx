import React from 'react';
import Styled from 'styled-components';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Table from './pages/TablePage';
import Team from './pages/TeamPage';
import Matches from './pages/MatchesPage';

const App: React.FC = () => {
  return (
    <Body>
      <Router>
        <nav>
          <Link to="/">Table</Link>
          <Link to="/team/Liebzig">Team</Link>
          <Link to="/matches">Matches</Link>
        </nav>
        <PageView>
          <Route path="/" exact component={Table} />
          <Route exact path="/team/:teamId" component={Team} />
          <Route exact path="/matches" component={Matches} />
        </PageView>
      </Router>
    </Body>
  );
};

const Body = Styled.main`
  background-color: #999;
`;

const PageView = Styled.article`
  margin: 20px auto;
  background-color: white;
  padding: 20px;
  max-width: 960px;
`;

export default App;
