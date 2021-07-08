import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import "antd/dist/antd.css";
import pic from "../../../img/f1.jpg";
const MainCartCard = () => {
  return (
    <>
      <CartCardHolder>
        <CartCard>
          <CartImage src={pic} />
          <TitleHolder>
            <TiltleCart>Vegetable Soup</TiltleCart>
            <CartPrice>#2,000</CartPrice>
          </TitleHolder>
          <ButtomButtonHolder>
            <Button
              style={{
                width: "150px",
                margin: "5px",
                height: "40px",
              }}
            >
              Details
            </Button>
            <Button
              style={{
                width: "150px",
                margin: "5px",
                height: "40px",
                background: "#004a1e",
                color: "white",
              }}
            >
              Add to Cart
            </Button>
          </ButtomButtonHolder>
        </CartCard>
      </CartCardHolder>
    </>
  );
};

export default MainCartCard;

const ScrollHolder = styled.div`
  height: 100%;
  width: 100%;
`;

const ButtomButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 5px;

  Button:hover {
    background-color: #c0de8a;
    color: black;
  }
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
  &:hover {
    transition: all 350ms;
    transform: scaleX(1);

    opacity: 0.97;
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    margin: 10px;
    margin-top: 20px;
  }
`;

const CartCardHolder = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* width: 100%; */
  /* background-color: red; */
  /* flex-wrap: wrap; */

  @media screen and (max-width: 600px) {
    width: 1000px;

    /* background-color: red; */
  }
`;

const SelectText = styled.div``;

const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
