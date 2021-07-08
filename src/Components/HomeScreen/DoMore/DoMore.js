import React from "react";
import styled from "styled-components";
import pic from "../../../img/do1.png";
import pic1 from "../../../img/do2.png";
const DoMore = () => {
  return (
    <Container>
      <Content>DO MORE WITH US</Content>
      <MoreBoxHolder>
        <MoreBox1>
          <MoreBox1image src={pic} />
          <MoreText1>Feed your Employee</MoreText1>
          <MoreText3>Get Started</MoreText3>
        </MoreBox1>

        <MoreBox2>
          <MoreBox1image src={pic1} />
          <MoreText1>Add Your Resturant</MoreText1>
          <MoreText3>Get Started</MoreText3>
        </MoreBox2>
      </MoreBoxHolder>
    </Container>
  );
};

export default DoMore;
const MoreText1 = styled.div`
  /* position: absolute; */
  display: none;
`;
const MoreText3 = styled.div`
  /* position: absolute; */
  display: none;
`;
const MoreText = styled.div``;

const MoreBox1image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const MoreBoxHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
`;

const MoreBox1 = styled.div`
  height: 250px;
  width: 350px;
  background-color: white;
  margin: 10px;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &:hover ${MoreText1} {
    display: block;
    position: absolute;
    background: rgba(192, 222, 138, 0.3);
    height: 250px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    color: black;
  }

  &:hover ${MoreText3} {
    display: block;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 50px;
  }
`;
const MoreBox2 = styled.div`
  height: 250px;
  width: 350px;
  background-color: white;
  margin: 10px;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }

  &:hover {
    cursor: pointer;
  }
  &:hover ${MoreText1} {
    display: block;
    position: absolute;
    background: rgba(192, 222, 138, 0.3);
    height: 250px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
    color: black;
  }

  &:hover ${MoreText3} {
    display: block;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
`;

const Content = styled.div`
  font-weight: bold;
`;
