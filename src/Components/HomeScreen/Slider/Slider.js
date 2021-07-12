import React from "react";
import styled from "styled-components";
import pic from "../../../img/f1.jpg";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Container>
      <Hero src={pic} />
      <Wrapper>
        <Info>Welcome to Udeme Kitchen </Info>
        <Info1>Enjoy Super Delicious African Meal.</Info1>

        <Link to="/ordernow">
          <Button1>ORDER NOW</Button1>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Slider;

const Hero = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Container = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  background: rgba(0%, 0%, 0%, 0.2);
`;

const Wrapper = styled.div`
  position: absolute;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Info = styled.div`
  color: white;
  font-size: 50px;
  font-weight: bold;
  padding-bottom: 0px;
  margin-bottom: 0px;
  /* background-color: #f69928; */
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const Info1 = styled.p`
  color: white;

  width: 29.8ch;
  animation: typing 14s steps(45, end), blink-caret 0.85s step-end infinite;
  animation-iteration-count: infinite;

  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 22px;

  @keyframes typing {
    from {
      width: 0;
    }
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 17px;
  }
`;

const ButtonContainer = styled.div`
  color: white;
  padding-top: 0px;
  margin-top: 0px;
  display: flex;
  width: 25rem;
  justify-content: space-between;
`;

const Button1 = styled.div`
  color: white;
  width: 12rem;
  background-color: #004a1e;
  height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 350ms;
  &:hover {
    cursor: pointer;
    background-color: #c0de8a;
    color: black;
  }
`;

const Button2 = styled.div`
  color: black;
  width: 12rem;
  background-color: lavender;
  height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 350ms;
  &:hover {
    cursor: pointer;
    background-color: #f69928;
    color: white;
  }
`;
