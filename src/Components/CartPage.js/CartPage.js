import React from 'react'
import CartCard from './CartCard'
import styled from "styled-components"
import CartHead from './CartHead'
import AllCart from './AllCart'
import TotalPay from './TotalPay'
import AllcartMobile from './CartMobile/AllcartMobile'

function CartPage() {
  return (
    <AllContainer>
      <Container>
        <CartHead />
        <AllCart />
        <TotalPay />

      </Container>
      <Container2>
        <AllcartMobile />
      </Container2>

    </AllContainer>


  )
}

export default CartPage


const Container2 = styled.div`
display: none;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (max-width:900px){
display: flex; 
}
@media screen and (max-width:768px){
display: flex; 
}

@media screen and (max-width:425px){
display: flex; 
}
@media screen and (max-width:375px){
display: flex; 
}
@media screen and (max-width:320px){
display: flex;
}

`

const AllContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: auto;

`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


@media screen and (max-width:900px){
display: none; 
}
@media screen and (max-width:768px){
display: none; 
}

@media screen and (max-width:425px){
display: none; 
}
@media screen and (max-width:375px){
display: none; 
}
@media screen and (max-width:320px){
display: none;
}

`
