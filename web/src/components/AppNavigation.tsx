import React from 'react';
import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AppNavigation: React.FC = () => {
  return (
    <Navigation>
      <NavItemList>
        <NavItem>
          <NavItemLink to="/" exact>
            Table
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/teams">Teams</NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLink to="/matches">Matches</NavItemLink>
        </NavItem>
      </NavItemList>
    </Navigation>
  );
};

const Navigation = Styled.nav`
  margin: 20px 0;
`;

const NavItemList = Styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  text-align: center;
`;

const NavItem = Styled.li`
  display: inline;
`;

const NavItemLink = Styled(NavLink)`
  margin: 0 5px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  background-color: #4a4984;
  border-radius: 6px;
  &.active,
  &:hover {
    background-color: #7181bb;
  }
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export default AppNavigation;
