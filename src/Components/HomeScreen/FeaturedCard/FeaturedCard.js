import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import "antd/dist/antd.css";
import pic from "../../../img/f1.jpg";
import MainCartCard from "../MainCartCard/MainCartCard";
import { Link } from "react-router-dom";
import { app } from "../../../Base";
import { connect, useDispatch } from "react-redux";
import { addFooditems } from "../../AuthState/actionState";

const db = app.firestore().collection("Fooditems");

const FeaturedCard = ({ view }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [womenData, setWomenData] = useState([]);
  const [kid, setKid] = useState([]);
  const [getAll, setGetAll] = useState([]);

  const [kidding, setKidding] = useState(false);
  const [maning, setManing] = useState(false);
  const [womaning, setWomaning] = useState(false);

  const handleKid = () => {
    setManing(false);
    setWomaning(false);
    setKidding(true);
  };
  const handleMan = () => {
    setManing(true);
    setWomaning(false);
    setKidding(false);
  };
  const handleWoman = () => {
    setManing(false);
    setWomaning(true);
    setKidding(false);
  };

  const uploadData = async () => {
    const res = await db.orderBy("vegetable").onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      if (res) {
        dispatch(addFooditems(i));
      }
      setData(i);
      console.log("let me set it", i);
    });
  };
  const uploadWoman = async () => {
    const res = await db.orderBy("pepper").onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      if (res) {
        dispatch(addFooditems(i));
      }
      setWomenData(i);
      console.log("let me set it", i);
    });
  };
  const uploadKid = async () => {
    const res = await db.orderBy("yam").onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      if (res) {
        dispatch(addFooditems(i));
      }
      setKid(i);
      console.log("let me set it", i);
    });
  };
  const gettingAll = async () => {
    const res = await db.onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      if (res) {
        dispatch(addFooditems(i));
      }
      setGetAll(i);
      console.log("let me set it", i);
    });
  };

  useEffect(() => {
    uploadData();
    uploadWoman();
    uploadKid();
    gettingAll();
  }, []);

  return (
    <>
      <ContainerText>FEATURED MEAL AVAILABLE</ContainerText>
      <CartMenu1>
        <br />
        <SelectText>Select Favourite</SelectText>
        <ButtonHolding>
          <Button onClick={handleWoman}>pepper soup</Button>

          <Button onClick={handleMan}>Vegetables</Button>

          <Button onClick={handleKid}>Yam and egg</Button>
        </ButtonHolding>
      </CartMenu1>
      <Container>
        <CartHolder>
          <CartMenu>
            <SelectText>Select Favourite</SelectText>
            <br />
            <Button
              onClick={handleWoman}
              style={{ width: "150px", margin: "5px", height: "40px" }}
            >
              Pepper Soup
            </Button>
            <Button
              onClick={handleKid}
              style={{ width: "150px", margin: "5px", height: "40px" }}
            >
              Yam and Egg
            </Button>
            <Button
              onClick={handleMan}
              style={{ width: "150px", margin: "5px", height: "40px" }}
            >
              Vegetables
            </Button>
          </CartMenu>

          {kidding ? (
            <>
              {kid.map((item) => (
                <MainCartCard key={item.id} t={item} />
              ))}
            </>
          ) : womaning ? (
            <>
              {womenData.map((item) => (
                <MainCartCard key={item.id} t={item} />
              ))}
            </>
          ) : maning ? (
            <>
              {data.map((item) => (
                <MainCartCard key={item.id} t={item} />
              ))}
            </>
          ) : (
            <>
              {view.map((item) => (
                <MainCartCard key={item.id} t={item} />
              ))}{" "}
            </>
          )}
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    view: state.Food.FoodDataBase,
  };
};

export default connect(mapStateToProps)(FeaturedCard);

const ButtonHolding = styled.div`
  display: flex;

  Button {
    width: 80px;
    margin: 5px;
    height: 40px;
    font-size: 9px;
    font-weight: bold;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border-color: #004a1e;
      color: #004a1e;
    }
  }
`;

const CartMenu1 = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

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

const SelectText = styled.div`
  color: #004a1e;
`;

const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #004a1e;
  margin-top: 50px;
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
  /* margin-top: 50px; */
`;

const CartHolder = styled.div`
  width: 80%;
  display: flex;
  overflow-x: auto;
  /* -ms-overflow-style: none; */
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
  }

  /* justify-content: space-between; */
`;
