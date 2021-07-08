import React from 'react'
import styled from "styled-components"
import CartCard from './CartCard'


function AllCart() {
  return (
    <Container>
      <CartCard />
      <CartCard />
    </Container>
  )
}

export default AllCart

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`