import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { BiCake } from "react-icons/bi";
import { MdLocalDrink } from "react-icons/md";
import { FaHamburger } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const NavbAr = () => {
  return (
    <NavBarDiv>
      <nav>
        <IconList>
          <IconItem>
            <Link to="/">
              <AiFillHome size="6vh" />
            </Link>
          </IconItem>
          <IconItem>
            <Link to="/desserts">
              <BiCake size="6vh" />
            </Link>
          </IconItem>
          <IconItem>
            <Link to="/drinks">
              <MdLocalDrink size="6vh" />
            </Link>
          </IconItem>
          <IconItem>
            <Link to="/food">
              <FaHamburger size="6vh" />
            </Link>
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
  color: red;
`;

export default NavbAr;
