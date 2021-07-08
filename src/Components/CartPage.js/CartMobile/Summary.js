import React from 'react'
import styled from "styled-components"

function Summary() {
  return (
    <Container>
      <SummaryCon>
        Summary
      </SummaryCon>
      <Item>
        <ItemsN>
          Total Items
        </ItemsN>
        <ItemsN2>
          4
        </ItemsN2>

      </Item>
      <Subtotal>
        <Subtotal1>
          SubTotal
        </Subtotal1>
        <Subtotal2>
          #3000
        </Subtotal2>

      </Subtotal>
      <Delivery>
        <Delivery1>
          Delivery Fee
        </Delivery1>
        <Delivery2>
          #1000
          </Delivery2>

      </Delivery>
      <TotalPrice>
        <TotalPrice1>
          Total Price
        </TotalPrice1>
        <TotalPrice2>
          #4000
        </TotalPrice2>

      </TotalPrice>
      <Proceed>
        <Proceed1>
          Procced To Payment
        </Proceed1>

      </Proceed>
      <Continue>
        <Continue2>
          Continue Order
        </Continue2>

      </Continue>

    </Container>
  )
}

export default Summary

const Continue2 = styled.div`
width: 300px;
height: 35px;
background-color:lightgray ;
justify-content: center;
display: flex;
align-items: center;
color: #004A1E;
border-radius: 5px;
font-weight: 500;

`

const Proceed1 = styled.div`
width: 300px;
height: 35px;
background-color:#004A1E ;
justify-content: center;
display: flex;
align-items: center;
color: white;
border-radius: 5px;
margin-bottom: 6px;

`

const TotalPrice1 = styled.div``
const TotalPrice2 = styled.div``

const Delivery1 = styled.div``
const Delivery2 = styled.div``

const Subtotal1 = styled.div``
const Subtotal2 = styled.div``

const ItemsN = styled.div`

`
const ItemsN2 = styled.div`

`

const Continue = styled.div`
padding-left: 10px;
justify-content: center;
display: flex;
`

const Proceed = styled.div`
padding-left: 10px;
justify-content: center;
display: flex;

`
const TotalPrice = styled.div`
padding-left: 10px;
display: flex;
padding-right: 20px;
font-weight:bold;
color: black;
justify-content: space-between;
`

const Delivery = styled.div`
padding-left: 10px;
display: flex;
padding-right: 20px;
justify-content: space-between;
font-weight:bold;
color: black;
`

const Subtotal = styled.div`
padding-left: 10px;
display: flex;
justify-content: space-between;
padding-right: 20px;
font-weight:bold;
color: black;
`

const Item = styled.div`
padding-left: 10px;
display: flex;
justify-content: space-between;
padding-right: 20px;
font-weight:bold;
color: black;

`

const SummaryCon = styled.div`
height: auto;

border-radius: 10px 10px 0px 0px;
padding-top: 5px;
padding-left: 10px;
font-weight: 800;
font-size: 20px;
color:#004A1E ;
font-family: poppins;
`


const Container = styled.div`
 background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(90px);
height: 200px;
display: flex;
flex-direction: column;
position: sticky;
button : 0;
border-radius: 10px 10px 0px 0px;



`
