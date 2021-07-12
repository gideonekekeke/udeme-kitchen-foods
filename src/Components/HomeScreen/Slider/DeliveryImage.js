import React from "react";
import styled from "styled-components";
import pic from "../../../img/de.png";
import pic1 from "../../../img/de2.png";
import pic2 from "../../../img/de3.png";

const DeliveryImage = () => {
  return (
    <DeliverContainer>
      <HeaderText>WHAT WE SERVE</HeaderText>
      <HeaderText2>Your Favourite Food Delievery Partner.</HeaderText2>
      <BoxHolder>
        <BoxHolding>
          <BoxSvg src={pic1} />
          <Content1>Easy To Order </Content1>
          <Content2>you only need a few steps in odering food.</Content2>
        </BoxHolding>
        <BoxHolding>
          <BoxSvg src={pic} />
          <Content1>Fastest Delievery </Content1>
          <Content2>Delievery that is always ontime even faster</Content2>
        </BoxHolding>
        <BoxHolding>
          <BoxSvg src={pic2} />
          <Content1> Best Quality Chief </Content1>
          <Content2>Not only fast for quality is also number one.</Content2>
        </BoxHolding>
      </BoxHolder>
    </DeliverContainer>
  );
};

export default DeliveryImage;

const BoxHolder = styled.div`
  width: 80%;
  /* background: red; */
  /* display: flex; */
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const BoxHolding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 600px) {
   font-size: 10px;

`;
const Content1 = styled.div`
  font-weight: bold;
`;
const Content2 = styled.div`
  width: 130px;
  text-align: center;
  font-size: 10px;
  margin-top: 10px;

  @media screen and (max-width: 600px) {
   font-size: 10px;
   text-align: center;
   /* background: red; */
   width : 85%;
   margin-top: 5px
 

`;

const BoxSvg = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  /* background-color: red; */
`;
const DeliverContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const HeaderText = styled.div`
  color: #004a1e;
`;
const HeaderText2 = styled.div`
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 22px;
    text-align: center;
    /* width: 300px; */
  }
`;
