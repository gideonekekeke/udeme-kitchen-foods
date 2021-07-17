import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AllFood from "./AllFood";
import pic from "../../img/f1.jpg";
import pic1 from "../../img/egg.jpg";
import pic3 from "../../img/f2.jpg";
import { connect, useDispatch } from "react-redux";
import { app } from "../../Base";
import { addFooditems } from "../AuthState/actionState";

const db = app.firestore().collection("Fooditems");
const OrderPage = ({ view }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const getFoodItem = async () => {
    const res = await db.onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      if (res) {
        dispatch(addFooditems(i));
      }
      setData(i);
    });
  };

  useEffect(() => {
    getFoodItem();
  }, []);

  return (
    <Container>
      <VegetableText>ORDER NOW!!!</VegetableText>
      <VegetableHolder>
        {data.map((item) => (
          <AllFood key={item.id} q={item} />
        ))}
      </VegetableHolder>
    </Container>
  );
};

export default OrderPage;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const VegetableText = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 20px;
`;

const VegetableHolder = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
`;
