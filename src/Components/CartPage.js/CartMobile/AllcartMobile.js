import React from 'react'
import styled from 'styled-components'
import CartMobile from './CartMobile'
import Summary from './Summary'


function AllcartMobile() {
  return (
    <Container>
      <Container1>
        <CartMobile />
        <CartMobile />
        <CartMobile />
        <CartMobile />
        <CartMobile />
      </Container1>
      <Container2>
        <Summary />

      </Container2>

    </Container>



  )
}

export default AllcartMobile

const Container1 = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

overflow-x: scroll;
height: 400px;
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
