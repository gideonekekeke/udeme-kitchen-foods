import React from 'react'
import styled from "styled-components"
import pix from "../../img/f1.jpg"
import { MdDeleteSweep } from 'react-icons/md';

function CartCard() {
  return (
    <CardAll>
      <DetailsCon>
        <FoodImg>
          <img src={pix} />

        </FoodImg>
        <FoodDetails>
          <Tseller>
            Seller: Udeme's Kitchen

          </Tseller>
          <Tides>
            <Ttitle>
              Eba And VegSoup
          </Ttitle>
            <Tdes>
              prepare from the best kitchen  prepare from the best kitchen
           
              </Tdes>
          </Tides>
          <Tremove>
            <MdDeleteSweep
              style={{
                color: "#004A1E",
                fontSize: "25px"
              }}
            /> Remove Items
          </Tremove>


        </FoodDetails>

      </DetailsCon>
      <QtyCon>
            2
      </QtyCon>
      <PriceCon>
           #300

      </PriceCon>
      <SubCon>
         #6000
      </SubCon>


    </CardAll>
  )
}

export default CartCard

const Tides = styled.div`

height: 55px;
display: flex;
flex-direction: column;

justify-content: space-between;
margin-top: -10px;
`

const Tremove = styled.div`
display: flex;
margin-top: 15px;

`
const Tdes = styled.div`
color: #004A1E;
font-size: 15px;
margin-top: -6px;
height:auto;



`
const Ttitle = styled.div`
color: #004A1E;
font-weight: 500;
font-size: 30px;
font-family: poppins;

`

const Tseller = styled.div`


`

const FoodDetails = styled.div`
height: 120px;
width: 500px;
display: flex;
flex-direction: column;

justify-content: space-between;
padding: 0px;


`

const FoodImg = styled.div`
height:125px;
width: 170px;

border-radius: 5px;

img{
height:120px;
width: 135px;
object-fit:cover;
border-radius: 5px;
}

`

const SubCon = styled.div`
height: 125px;
width: 150px;
border-left: 1px solid #D8D8D8;
display: flex;
justify-content: center;
align-items: center;

`



const PriceCon = styled.div`
height: 135px;
width: 100px;
border-left: 1px solid #D8D8D8;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;

`

const QtyCon = styled.div`
height: 135px;
width: 100px;

padding: 5px;
border-left: 1px solid #D8D8D8;
display: flex;
justify-content: center;
align-items: center;
`

const DetailsCon = styled.div`
height: 170px;
width: 600px;

display: flex;
padding: 5px;
border-radius: 8px;
justify-content: space-between;

`

const CardAll = styled.div`
height: 135px;
width: 900px;


display: flex;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
border: 1px solid #D8D8D8;
border-radius: 8px;
margin-bottom: 20px;

`
