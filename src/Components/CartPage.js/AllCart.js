import React from 'react'
import styled from "styled-components"
import CartCard from './CartCard'
import { connect, useDispatch, useSelector } from "react-redux"


function AllCart({ order }) {
  return (
    <Container>

      {
        order.map((item) => (
          <CartCard key={item.id} r={item} />
        ))
      }


    </Container>
  )
}

const mapStateCartList = (state) => {

  return {
    order: state.Food.cart
  }
}


export default connect(mapStateCartList)(AllCart)

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`