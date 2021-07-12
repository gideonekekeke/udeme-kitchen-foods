import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from "react-router-dom";

function TotalPay() {

  const hist = useHistory();
  return (
    <AllContainer>
      <Container>
        <EmptyCon>

        </EmptyCon>
        <TotalPrice>
          TOTAL
      </TotalPrice>

        <TotalCon>

          #6000
          <p>Dilevery fee is 1000</p>
        </TotalCon>



      </Container>

      <Container2>
        <EmptyCon2>

        </EmptyCon2>
        <Continue
          onClick={
            () => {
              hist.push("/ordernow")
            }
          }

        >
          CONTINUE SHOPPING
        </Continue>
        <Proceed>
          PROCEED TO PAYMENT
        </Proceed>

      </Container2>
    </AllContainer >
  )
}

export default TotalPay

const EmptyCon2 = styled.div`
width: 400px;


`

const Proceed = styled.div`
width: 210px;
background:  #004A1E;
display: flex;
justify-content: center;
color: white;
font-weight: bold;
align-items: center;
border-radius: 5px;
cursor: pointer;

`

const Continue = styled.div`

width: 220px;
background:  white;
display: flex;
justify-content: center;
align-items: center;
color: #004A1E;
font-weight: bold;
border-radius: 5px;
cursor: pointer;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
`

const TotalPrice = styled.div`
background:  #004A1E;
color:white;
width: 85px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);


`


const TotalCon = styled.div`
width:130px;
color:  #004A1E;
font-weight: bold;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);

p{
  font-weight: 200;
}
`

const EmptyCon = styled.div`

width: 700px;


`

const Container = styled.div`
display: flex;
width: 900px;

height: 70px;
justify-content: space-between;
`

const Container2 = styled.div`
display: flex;
width: 900px;

height: 50px;
justify-content: space-between;
margin-top: 10px;
`
const AllContainer = styled.div`
height: auto;
display: flex;
flex-direction: column;
`
