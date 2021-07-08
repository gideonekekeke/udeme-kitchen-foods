import React, { useState } from 'react'
import styled from "styled-components"
import pix from "../../../img/f1.jpg"
import { Input } from 'antd'

function CartMobile() {

  const [qty, setQty
  ] = useState(1)
  return (
    <Container>
      <ComImage>
        <img src={pix} />

      </ComImage>

      <DetailsP>
        <Cname>
          Udeme's kitchen

        </Cname>
        <FoodName>
          Eba and vegSoup
        </FoodName>
        <FoodDecs>

          Extra Eba
        </FoodDecs>
        <PriceDetails>
          <Price>
            #3000
          </Price>
          <Details>
            view more
</Details>
        </PriceDetails>


      </DetailsP>
      <QTYCon>
        <Com1>
          QTY
        </Com1>
        <Com2>
          <Input
            min="1"
            type="number"
            value={qty}
            style={{
              height: "65px",
              width: "40px",
              border: "1px solid #004A1E"

            }}

          />

        </Com2>
        <Cancel>
          x
        </Cancel>

      </QTYCon>

    </Container>
  )
}

export default CartMobile

const Cancel = styled.div`
height: 18px;
width: 18px;
border-radius: 20px;
align-items: center;
display: flex;
justify-content: center;
background-color: lightgray;
color: red;
position: absolute;
top: 0px;
right: 0px;
`

const Com2 = styled.div``

const Com1 = styled.div`
color: #004A1E;
font-weight: 500;
font-size: 13px;

@media screen and (max-width:768px){
color: #004A1E;
font-weight: 400;
font-size: 19px;
}

@media screen and (max-width:500px){
color: #004A1E;
font-weight: 500;
font-size: 17px;
}

@media screen and (max-width:425px){
  color: #004A1E;
font-weight: 500;
font-size: 15px;
}

@media screen and (max-width:375px){
  color: #004A1E;
font-weight: 500;
font-size: 13px;
}

@media screen and (max-width:320px){
  color: #004A1E;
font-weight: 500;
font-size: 13px;
}

`

const Details = styled.div`
width: 100px;
background-color: #004A1E;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
height: 30px;

@media screen and (max-width:768px){
width: 190px;
background-color: #004A1E;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
height: 35px;
}

@media screen and (max-width:500px){
width: 150px;
background-color: #004A1E;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
height: 35px;
}

@media screen and (max-width:425px){
  width: 120px;
background-color: #004A1E;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
height: 30px;
}

@media screen and (max-width:375px){
  width: 100px;
background-color: #004A1E;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
height: 30px;
}

@media screen and (max-width:320px){
  width: 100px;
background-color: #004A1E;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
height: 30px;
}

`

const Price = styled.div`
font-weight: 500;
font-size: 15px;
justify-content: center;
align-items: center;
display: flex;
`

const PriceDetails = styled.div`
display: flex;
justify-content: space-between;
`

const FoodDecs = styled.div``

const FoodName = styled.div`
color: #004A1E;
font-weight: bold;
margin-top:-5px;

@media screen and (max-width:768px){
color: #004A1E;
font-weight: 500;
margin-top:0px;
font-size: 28px;
font-family:poppins;
}

@media screen and (max-width:500px){
color: #004A1E;
font-weight: 500;
margin-top:0px;
font-size: 25px;
font-family:poppins;
}

@media screen and (max-width:425px){
color: #004A1E;
font-weight: 500;
margin-top:-5px;
font-size: 20px;
font-family:poppins;
}

@media screen and (max-width:375px){
  color: #004A1E;
  font-weight: 500;
margin-top:-5px;
font-size: 17px;
font-family:poppins;
}


@media screen and (max-width:320px){
  color: #004A1E;
  font-weight: 500;
margin-top:-5px;
font-size: 15px;
}

`

const Cname = styled.div`

`

const QTYCon = styled.div`
width: 60px;
padding-left: 5px;


display: flex;
flex-direction: column;
position:relative;

@media screen and (max-width:768px){
  width: 80px;
padding-left: 5px;
display: flex;
flex-direction: column;
position:relative;
}

@media screen and (max-width:500px){
width: 70px;
padding-left: 5px;


display: flex;
flex-direction: column;
position:relative;
}

@media screen and (max-width:425px){
  width: 65px;
padding-left: 5px;


display: flex;
flex-direction: column;
position:relative;
}

@media screen and (max-width:375px){
  width: 65px;
padding-left: 5px;


display: flex;
flex-direction: column;
position:relative;
}


@media screen and (max-width:320px){
  width: 60px;
padding-left: 5px;


display: flex;
flex-direction: column;
position:relative;
}


`

const DetailsP = styled.div`
width: 150px;
line-height: 20px;

display: flex;
flex-direction: column;

@media screen and (max-width:768px){
width:300px;
line-height: 20px;
/* justify-content: space-between; */
display: flex;
flex-direction: column;
}

@media screen and (max-width:500px){
width:250px;
line-height: 20px;

display: flex;
flex-direction: column;
}

@media screen and (max-width:425px){
width:220px;
line-height: 20px;

display: flex;
flex-direction: column;
}

@media screen and (max-width:375px){
  width:180px;
line-height: 20px;

display: flex;
flex-direction: column;
}

@media screen and (max-width:320px){
  width: 150px;
line-height: 20px;

display: flex;
flex-direction: column;
}
`


const ComImage = styled.div`

width: 85px;
background-color: yellow;
height: 85px;
border-radius: 85px;

img{
  width: 85px;
object-fit: cover;
height: 85px;
border-radius: 85px;
}

@media screen and (max-width:768px){
width: 120px;
background-color: yellow;
height: 120px;
border-radius: 120px;


img{
  width: 120px;
object-fit: cover;
height: 120px;
border-radius: 120px;
}
}
@media screen and (max-width:500px){
width: 110px;
background-color: yellow;
height: 110px;
border-radius: 110px;


img{
  width: 110px;
object-fit: cover;
height: 110px;
border-radius: 110px;
}
}


@media screen and (max-width:425px){
  width: 100px;
background-color: yellow;
height: 100px;
border-radius: 100px;


img{
  width: 100px;
object-fit: cover;
height: 100px;
border-radius: 100px;
}
}

@media screen and (max-width:375px){
  width: 90px;
background-color: yellow;
height: 90px;
border-radius: 90px;


img{
  width: 90px;
object-fit: cover;
height: 90px;
border-radius: 90px;
}
}

@media screen and (max-width:320px){
  width: 85px;
background-color: yellow;
height: 85px;
border-radius: 85px;


img{
  width: 85px;
object-fit: cover;
height: 85px;
border-radius: 85px;
}

}
`

const Container = styled.div`

display: flex;
width: 310px;
height:auto;
margin-top: 20px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
justify-content: space-between;
padding: 5px;
border-radius: 10px;


@media screen and (max-width:768px){
display: flex;
width: 520px;
height:auto;
margin-top: 20px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
justify-content: space-between;
padding: 5px;
border-radius: 10px;
}

@media screen and (max-width:500px){
display: flex;
width: 450px;
height:auto;
margin-top: 20px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
justify-content: space-between;
padding: 5px;
border-radius: 10px;
}

@media screen and (max-width:425px){
display: flex;
width: 400px;
height:auto;
margin-top: 20px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
justify-content: space-between;
padding: 5px;
border-radius: 10px;
}

@media screen and (max-width:375px){
display: flex;
width: 350px;
height:auto;
margin-top: 20px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
justify-content: space-between;
padding: 5px;
border-radius: 10px;
}

@media screen and (max-width:320px){
  display: flex;
width: 310px;
height:auto;

margin-top: 20px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
justify-content: space-between;
padding: 5px;
border-radius: 10px;
}





`