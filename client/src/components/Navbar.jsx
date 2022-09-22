//importing from React
import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

//Importing styling compoents and Icons
import styled from "styled-components";
import { BiCake } from "react-icons/bi";
import { MdLocalDrink } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

//Nav Bar is made with Phone screens in mind. The user will know which tab they have active as it will change color and scale when activating.
const NavbAr = () => {
  return (
    <NavBarDiv>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return isActive ? { color: "Gray" } : { color: "black" };
        }}
      >
        <StyledAiFillHome size="6vh" />
      </NavLink>
      <NavLink
        to="/desserts"
        style={({ isActive }) => {
          return isActive ? { color: "Gray" } : { color: "black" };
        }}
      >
        <StyledBiCake size="6vh" />
      </NavLink>
      <NavLink
        to="/drinks"
        style={({ isActive }) => {
          return isActive ? { color: "Gray" } : { color: "black" };
        }}
      >
        <StyledMdLocalDrink size="6vh" />
      </NavLink>
      <NavLink
        to="/food"
        style={({ isActive }) => {
          return isActive ? { color: "Gray" } : { color: "black" };
        }}
      >
        <StyledFaHamburger size="6vh" />
      </NavLink>
    </NavBarDiv>
  );
};

const NavBarDiv = styled.div`
  /* height: 10vh; */
  background: #ffffe0;
  display: flex;
  justify-content: center;
  gap: 10vw;
  outline: #4e534e47 solid 1px;
`;

//Copy pasting is used here, can refactor this to a single component perhaps.
const StyledAiFillHome = styled(AiFillHome)`
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(1.25);
  }
`;

const StyledBiCake = styled(BiCake)`
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(1.25);
  }
`;

const StyledMdLocalDrink = styled(MdLocalDrink)`
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(1.25);
  }
`;

const StyledFaHamburger = styled(FaHamburger)`
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(1.25);
  }
`;

export default NavbAr;
