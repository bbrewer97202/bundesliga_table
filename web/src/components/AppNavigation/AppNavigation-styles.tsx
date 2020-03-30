import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = Styled.nav`
  padding: 20px 0;
  background-color: #c80a00;
  font-size: 1.6rem;
`;

export const NavItemList = Styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
`;

export const NavItem = Styled.li`
  display: inline;
`;

export const NavItemLink = Styled(NavLink)`
  margin: 0 5px;
  padding: 0.5rem 1rem;
  color: #eae5e5;
  text-decoration: none;
  &.active {
    color: #ffffff;
    font-weight: bold;
  }
  &:hover {
    color: #ffffff;
  }

`;
