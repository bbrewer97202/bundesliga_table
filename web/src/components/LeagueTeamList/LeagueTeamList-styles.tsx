import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TeamList = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export const TeamListing = Styled.li`
  display: block;
  margin: 0;
  padding: 0;
  border: dashed 1px orange;
  text-align: center;
  @media screen and (min-width: 680px) {
    width: 33%;
  }
  img {
    display: inline-block;
    width: auto;
    height: 100%;
    @media screen and (min-width: 680px) {
      max-width: 110px;
    }
  }
  span {
    display: block;
  }
`;

export const TeamLink = Styled(Link)`
  display: block;
  @media screen and (max-width: 680px) {
    width: 160px;
  }
`;
