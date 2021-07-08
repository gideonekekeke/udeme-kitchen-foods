import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import "antd/dist/antd.css";
import pic from "../../../img/f1.jpg";
import MainCartCard from "../MainCartCard/MainCartCard";
import { Link } from "react-router-dom";

const FeaturedCard = () => {
  return (
    <Container>
      <ContainerText>FEATURED MEAL AVAILABLE</ContainerText>
      <CartHolder>
        <CartMenu>
          <SelectText>Select Favourite</SelectText>
          <br />
          <Button style={{ width: "150px", margin: "5px", height: "40px" }}>
            Pepper Soup
          </Button>
          <Button style={{ width: "150px", margin: "5px", height: "40px" }}>
            Egusi Soup
          </Button>
          <Button style={{ width: "150px", margin: "5px", height: "40px" }}>
            Vegetables
          </Button>
          <Button style={{ width: "150px", margin: "5px", height: "40px" }}>
            Small Chops
          </Button>
        </CartMenu>
        <MainCartCard />
        <MainCartCard />
        <MainCartCard />
        <MainCartCard />
        <MainCartCard />
        <MainCartCard />
        <MainCartCard />
      </CartHolder>
      <Link to="/ordernow">
        <Button
          style={{
            margin: "10px",
            width: "150px",
            height: "40px",
            backgroundColor: "#c0de8a ",
            color: "black",
          }}
        >
          See More ->
        </Button>
      </Link>
    </Container>
  );
};

export default FeaturedCard;

const ButtomButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 5px;
`;
const TitleHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 10px;
`;
const TiltleCart = styled.div`
  font-weight: bold;
`;
const CartPrice = styled.div`
  margin-right: 20px;
  color: #004a1e;
  font-size: 13px;
`;

const CartImage = styled.img`
  height: 220px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CartCard = styled.div`
  height: 320px;
  width: 300px;
  background-color: white;
  margin: 10px;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  flex-direction: column;
  @media screen and (max-width: 600px) {
    margin: 0;
    margin-top: 20px;
  }
`;

const SelectText = styled.div``;

const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const CartMenu = styled.div`
  /* height: 200px; */
  width: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  /* position: relative; */
  left: 0;
  top: 0;
  z-index: 1;
  /* justify-content: center; */
  border-right: 1px solid silver;
  margin-top: 20px;
  @media screen and (max-width: 600px) {
    display: none;
  }

  Button:hover {
    background-color: #c0de8a;
    color: black;
  }
`;

const Container = styled.div`
  width: 100%;

  /* background-color: red; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const CartHolder = styled.div`
  width: 80%;
  display: flex;
  overflow-x: auto;
  /* -ms-overflow-style: none; */
  ::-webkit-scrollbar {
    display: none;
  }

  /* justify-content: space-between; */
`;
