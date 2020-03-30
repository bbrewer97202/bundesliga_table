import React, { useEffect, useState } from 'react';
import Matches from '../components/Matches';
import { query } from '../util.js';

const MatchesPage = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    query(`/matches`).then(response => {
      console.log('response', response.matches);
      //TODO: error checking
      setMatches(response.matches);
    });
  }, []);

  return <Matches matches={matches} />;
};

export default MatchesPage;
