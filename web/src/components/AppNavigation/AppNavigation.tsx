import React from 'react';
import * as Styles from './AppNavigation-styles';

const AppNavigation = () => {
  const { Navigation, NavItemList, NavItem, NavItemLink } = Styles;

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

export default AppNavigation;
