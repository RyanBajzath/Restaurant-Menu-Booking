import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiCake } from "react-icons/bi";
import { MdLocalDrink } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { home } from "react-icons-kit/icomoon";

const NavbAr = () => {
  return (
    <NavBarDiv>
      <nav>
        <IconList>
          <IconItem>
            <NavLink
              to="/"
              style={(isActive) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              <StyledAiFillHome size="6vh" />
            </NavLink>
          </IconItem>

          <IconItem>
            <NavLink
              to="/desserts"
              style={(isActive) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              <StyledBiCake size="6vh" />
            </NavLink>
          </IconItem>
          <IconItem>
            <NavLink
              to="/drinks"
              style={(isActive) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              <StyledMdLocalDrink size="6vh" />
            </NavLink>
          </IconItem>
          <IconItem>
            <NavLink
              to="/food"
              style={(isActive) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              <StyledFaHamburger size="6vh" />
            </NavLink>
          </IconItem>
        </IconList>
      </nav>
    </NavBarDiv>
  );
};

const NavBarDiv = styled.div`
  /* height: 10vh; */
  background: #ffffe0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconList = styled.ul`
  display: flex;
  gap: 1vw;
  justify-content: center;
  align-items: center;
`;

const IconItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

// const StyledNavLink = styled(NavLink)`
//   /* color: black; */
//   &:hover {
//     color: red;
//   }
//   &:active {
//     transform: scale(5);
//   }
// `;

const StyledAiFillHome = styled(AiFillHome)``;

const StyledBiCake = styled(BiCake)``;

const StyledMdLocalDrink = styled(MdLocalDrink)``;

const StyledFaHamburger = styled(FaHamburger)``;

export default NavbAr;
