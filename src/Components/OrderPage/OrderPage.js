import React from "react";
import styled from "styled-components";
import AllFood from "./AllFood";
import pic from "../../img/f1.jpg";
import pic1 from "../../img/egg.jpg";
import pic3 from "../../img/f2.jpg";

const OrderPage = () => {
  return (
    <Container>
      <VegetableText>ORDER NOW!!!</VegetableText>
      <VegetableHolder>
        <AllFood title="Vegetable soup" pic={pic} />
        <AllFood title="Yam and Egg sauce" pic={pic1} />
        <AllFood title="Pepper Soup" pic={pic3} />
        <AllFood title="Vegetable soup" pic={pic} />
        <AllFood title="Vegetable soup" pic={pic} />
        <AllFood title="Yam and Egg sauce" pic={pic1} />
        <AllFood title="Pepper Soup" pic={pic3} />
        <AllFood title="Vegetable soup" pic={pic} />
        <AllFood title="Yam and Egg sauce" pic={pic1} />
        <AllFood title="Yam and Egg sauce" pic={pic1} />
        <AllFood title="Vegetable soup" pic={pic} />
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
`;
