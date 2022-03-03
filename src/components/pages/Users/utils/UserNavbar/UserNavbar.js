import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { Outlet } from "react-router-dom";

export default function UserNavbar() {
  return (
    <>
      <Nav>
        <NavLogo to="/user/landing">Eventive</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/user/landing" activestyle>
            Home
          </NavLink>
          <NavLink to="/user/shedule" activestyle>
            Shedule
          </NavLink>
          <NavLink to="/user/result" activestyle>
            Results
          </NavLink>
          <NavLink to="/user/register" activestyle>
            Register
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/">Logout</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
      <Outlet />
    </>
  );
}
