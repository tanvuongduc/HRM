import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const HeaderEdit = (props) => {
  return (
    <div>
      <Nav className="bg-info clearfix">
        <NavItem>

          <NavLink href="company" className="text-white">PREVIEW</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="details" className="text-white">DETAILS</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default HeaderEdit;