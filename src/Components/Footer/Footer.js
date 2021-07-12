import React, { Fragment } from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import pic from "../../img/ud1.png";
import { Link } from "react-router-dom";

let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <ContentWrapper>
            <ContentText1>About Us</ContentText1>
            <ContentText2>
              We strongly believe that our people approach is fundamental to
              achieving our vision
            </ContentText2>
          </ContentWrapper>
          <ContentWrapperm>
            <ContentText1>Our Menu</ContentText1>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <ContentText2>Home</ContentText2>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/ordernow"
            >
              <ContentText2> Place Order</ContentText2>
            </Link>
          </ContentWrapperm>
          <ContentWrapper>
            <ContentText1>Contact Us</ContentText1>
            <ContentText2>24, lekki road, Lagos</ContentText2>
            <ContentText2>Email: UdemeKit@gmail.com</ContentText2>
            <ContentText2>phone: +234 111 111 000</ContentText2>
          </ContentWrapper>
        </Wrapper>
      </Container>
      <BottomTab>
        <Tab>
          <Logo src={pic} />
          <span>
            Developed by CodeLab 🚀 | © {date} All rights reserved 👽{" "}
          </span>
          <SocialLinks>
            <a
              href="https://www.facebook.com/groups/brighterdayscodelab/"
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookSquare style={{ color: "black" }} />
            </a>

            <a
              href="https://www.instagram.com/peter_oti_code/"
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram style={{ color: "black" }} />
            </a>
            <a
              href="https://studio.youtube.com/channel/UCjHVNjp4cfxBfKRbbtUUYAg/videos"
              // rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube style={{ color: "black" }} />
            </a>
          </SocialLinks>
        </Tab>
      </BottomTab>
    </Fragment>
  );
};

export default Footer;

const ContentWrapper = styled.div``;
const ContentWrapperm = styled.div`
  margin-left: 70px;

  @media screen and (max-width: 600px) {
    margin-left: 17px;
  }
`;
const ContentText1 = styled.div`
  font-weight: bold;
`;
const ContentText2 = styled.div`
  font-weight: 300;

  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: ;
  }
`;

const Container = styled.div`
  /* height: 300px; */
  width: 100%;
  margin-top: 20px;

  background: #004a1e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  margin: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 80%;
  justify-content: center;
  margin-left: 150px;
  /* background-color: red; */
  /* align-items: center; */
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0;
    width: 100%;
    margin-left: 10px;
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;

const Tab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
`;

const BottomTab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #c0de8a;
  color: black;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  /* padding: 0 15px; */
`;
const SocialLinks = styled.div`
  font-size: 35px;
  height: 100%;
  display: flex;
  align-items: center;
  width: 170px;
  justify-content: space-between;
  /* background-color: red; */

  a {
    color: white;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: 70px;
  }
`;
const Logo = styled.img`
  width: 150px;
  height: 40px;
  object-fit: contain;
`;
