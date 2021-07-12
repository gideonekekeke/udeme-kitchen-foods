import React from 'react'
import styled from 'styled-components'
import CartMobile from './CartMobile'
import Summary from './Summary'
import { connect, useDispatch, useSelector } from "react-redux"


function AllcartMobile({ order }) {
  return (
    <Container>
      <Container1>

        {
          order.map((item) => (

            <CartMobile key={item.id} r={item} />
          ))
        }


      </Container1>
      <Container2>
        <Summary />

      </Container2>

    </Container>



  )
}

const mapStateCartList = (state) => {

  return {
    order: state.Food.cart
  }
}

export default connect(mapStateCartList)(AllcartMobile)

const Container1 = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

overflow-x: scroll;
height: 300px;
`

const Container2 = styled.div`
position: sticky;
bottom: 0;
z-index: 1;
`

const Container = styled.div`
display: none;

@media screen and (max-width:900px){
display: flex; 
flex-direction: column;
}
@media screen and (max-width:768px){
display: flex; 
flex-direction: column;
}

@media screen and (max-width:425px){
display: flex;
flex-direction: column; 
}
@media screen and (max-width:375px){
display: flex; 
flex-direction: column;
}
@media screen and (max-width:320px){
display: flex;
flex-direction: column;
}

`
