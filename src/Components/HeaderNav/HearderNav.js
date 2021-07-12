import React, { useState } from "react";
import styled from "styled-components";
import log from "../../img/ud1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import "./head.css";
import { connect } from "react-redux";

// const { Search } = Input;
const HearderNav = ({ view }) => {
  const [counter, setCounter] = useState(0);

  React.useEffect(() => {
    let newCounter = 0;
    view.forEach((el) => {
      newCounter += el.qty;
    });
    setCounter(newCounter);
  }, [counter, view]);

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
        <Homebar>About </Homebar>
        <Input
          className="inputClass"
          placeholder="Search"
          suffix={<AiOutlineSearch />}
        />
      </NavHolder>

      <Link style={{ textDecoration: "none", color: "black" }} to="/cartpage">
        <CartHolder>
          <AiOutlineShoppingCart />
          <CartNumber>{counter}</CartNumber>
        </CartHolder>
      </Link>
    </NavContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    view: state.Food.cart,
  };
};

export default connect(mapStateToProps)(HearderNav);

const CartHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 70px;
  font-size: 17px;

  @media screen and (max-width: 600px) {
    margin-right: 30px;
  }
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
  width : 100%

  z-index: 100;
  @media screen and (max-width: 960px) {
    Input {
      display: none;
    }
  }
  
`;

const Logo = styled.img`
  height: 70px;
  width: 70px;
  object-fit: contain;
  margin-left: 100px;

  @media screen and (max-width: 600px) {
    margin: 0;
    margin-left: 10px;
  }
`;

const Homebar = styled.div`
  margin: 10px;
`;
const NavHolder = styled.div`
  display: flex;
  flex: 1;
  margin-left: 15px;
  font-weight: bold;
  align-items: center;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;
