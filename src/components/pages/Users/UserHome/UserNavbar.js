import React from "react";
import { useState, useEffect } from "react";
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

//details services
import detailsService from "../../../../services/detailsService";

export default function UserNavbar() {

  const [details,setDetails] = useState([]);
  const [first,setFirst] = useState([]);
  useEffect(()=>{
    const getDetails = async () => {
      try {
        const pgmDetails = await detailsService.gettDetails();
        setDetails(pgmDetails.data);
        setFirst(pgmDetails.data[0])
      }catch(err){
        console.error(err?.response?.data?.message);
      }
    };
    getDetails();
  },[]);


  return (
    <>
      <Nav>
        <NavLogo to="/user/landing">Eventive</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/user/landing" activestyle>
            Home
          </NavLink>
          {
             first.isRegistrationLock?null:<NavLink to="/user/assignevent" activestyle disabled={first.isRegistrationLock=="Locked"}>
             Assign Event
           </NavLink>
          }        
          <NavLink to="/user/shedule" activestyle>
            Shedule
          </NavLink>
          <NavLink to="/user/result" activestyle>
            Results
          </NavLink>
          {
             first.isRegistrationLock?null:<NavLink to="/user/register" activestyle>
             Register
           </NavLink>
          }
          <NavBtn>
            <NavBtnLink to="/">Logout</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
      <Outlet />
    </>
  );
}
