import React from 'react'
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";


export default function UserNavbar() {
  return (
    <>
    <Nav>
     <NavLogo to="/user/home">
         Eventive
     </NavLogo>
     <Bars />

     <NavMenu>
         <NavLink to="/user/home" activestyle>
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
             <NavBtnLink to="/user/login">Login</NavBtnLink>                
         </NavBtn>
     </NavMenu> 
    </Nav> 
 </>
  )
}
