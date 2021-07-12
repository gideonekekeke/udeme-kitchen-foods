import React from "react";
import styled from "styled-components";
import log from "../../img/ud1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const HearderNav = () => {
  return (
    <NavContainer>
      <Logo src={log} />
      <NavHolder>
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <Homebar>Home</Homebar>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/ordernow">
          <Homebar>Order </Homebar>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/about">
          <Homebar>About </Homebar>
        </Link>
      </NavHolder>
      <Link style={{ textDecoration: "none", color: "black" }} to="/cartpage">

        <CartHolder>
          <AiOutlineShoppingCart />
          <CartNumber>0</CartNumber>
        </CartHolder>
      </Link>
    </NavContainer>
  );
};

export default HearderNav;

const CartHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  font-size: 17px;
`;

const CartNumber = styled.div`
  /* background-color: red; */
`;

const NavContainer = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  /* border-radius: 10px; */
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 70px;
  /* width: 100%; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;

  z-index: 100;
  /* position: absolute; */
`;

const Logo = styled.img`
  height: 70px;
  width: 70px;
  object-fit: contain;
  margin-left: 15px;
`;

const Homebar = styled.div`
  margin: 10px;
`;
const NavHolder = styled.div`
  display: flex;
  flex: 1;
  margin-left: 15px;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;
