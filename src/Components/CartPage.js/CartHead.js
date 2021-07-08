import React from 'react'
import styled from "styled-components"

function CartHead() {
  return (
    <Container>
      <ItemCon>
        ITEMS
      </ItemCon>
      <QtyCon>
        QUANTITY
      </QtyCon>
      <UnitCon>
        UNIT PRICE
      </UnitCon>
      <SubTotal>
        SUBTOTAL
      </SubTotal>
    </Container>
  )
}

export default CartHead

const SubTotal = styled.div`
width: 135px;
display: flex;
justify-content: center;
align-items: center;
background: #004A1E;
font-size: 10px;
font-weight: bold;
color: white;
`

const UnitCon = styled.div`
width: 80px;
display: flex;
justify-content: center;
align-items: center;
background: #004A1E;
font-size: 10px;
font-weight: bold;
color: white;
`


const QtyCon = styled.div`
width: 80px;
display: flex;
justify-content: center;
align-items: center;
background: #004A1E;
font-size: 10px;
font-weight: bold;
color: white;
`

const ItemCon = styled.div`
height: 30px;
width: 600px;
color:#004A1E ;
`

const Container = styled.div`

width: 900px;
display: flex;
margin-top: 35px;

`