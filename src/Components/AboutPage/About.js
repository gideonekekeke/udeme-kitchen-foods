import { Details } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import pix from "./img/2.png"
import pix2 from "./img/Udeme-kitchen-logo-1.png"
import iconimag from "./img/ico_3.jpg"
import iconsales from "./img/sales.png"
import iconkinfe from "./img/knife.png"
import iconplug from "./img/plug.png"



function About() {
  return (
    <Container>
      <Logo src={pix2} />
      <Title>
        Welcome To Udeme's kitchen
      </Title>
      <Detailsinfo>
        <Detailsinfo1>
          <Dtails1>
            <Dlogo src={iconimag}>

            </Dlogo>
            <Dtitle>
              We Provide Healthy Meal
            </Dtitle>
            <Ddes>
              This description is used on certified organic fruits, vegetables, eggs, meat or other single-ingredient foods.
            </Ddes>

          </Dtails1>
          <Dtails2>
            <Dstales src={iconsales}>

            </Dstales>
            <Dtitle>
              Big Discount
            </Dtitle>

            <Ddes>
              Get 10% Discount When You Order And We Get It Delivery ORDER NOW!!
            </Ddes>

          </Dtails2>



        </Detailsinfo1>
        <Detailsinfo2>
          <img src={pix} />

        </Detailsinfo2>
        <Detailsinfo3>
          <Dtails1>
            <Kdetails src={iconkinfe}>

            </Kdetails>
            <Dtitle>
              Food From Kitchen
            </Dtitle>

            <Ddes>
              Get The Best Food From Udeme's Kitchen, Your Best Plug For Super Delicious African Foods.
            </Ddes>

          </Dtails1>
          <Dtails2>
            <SureImg src={iconplug}>

            </SureImg>
            <Dtitle>
              Sure Plug
            </Dtitle>

            <Ddes>
              Get 10% Discount When You Order And We Get It Delivery ORDER NOW!!
            </Ddes>

          </Dtails2>





        </Detailsinfo3>

      </Detailsinfo>
    </Container>
  )
}

export default About


const SureImg = styled.img`

height: 50px;
width: 50px;
object-fit: cover;
margin-top: -50px;
`

const Kdetails = styled.img`
height: 100px;
width: 100px;
object-fit: cover;
margin-top: -50px;
`


const Dstales = styled.img`
height: 60px;
width: 60px;
object-fit: cover;
`

const Ddes = styled.div`
text-align: center;
font-weight: 700;
color: #004A1E ;
`

const Dtitle = styled.div`
height: 50px;
font-weight: 500;
font-size: 15px;
`


const Dlogo = styled.img`
margin-bottom: 20px;
`

const Dtails1 = styled.div`
height: 250px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Dtails2 = styled.div`
margin-top: -50px;
height: 250px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Dtails3 = styled.div``

const Logo = styled.img`

height: 70px;
  width: 70px;
  object-fit: contain;
  margin-top: 20px;
`

const Detailsinfo3 = styled.div`
height: auto;
width: 310px;

display: flex;
flex-direction: column;
`

const Detailsinfo2 = styled.div`
height: 550px;
width: 450px;
border-radius: 400px;

img{
height:550px;
width: 450px;
object-fit: cover;
border-radius: 5px;
border-radius: 190px;

}

@media screen and (max-width:320px){
height: 300px;
width: 300px;
border-radius: 400px;

img{
  height: 360px;
width: 300px;
object-fit: cover;
border-radius: 5px;
border-radius: 150px;


}
}

`

const Detailsinfo1 = styled.div`


height: auto;
width: 310px;

display: flex;
flex-direction: column;
`

const Detailsinfo = styled.div`

height:auto;
justify-content: space-around;
align-items:  space-around;
display: flex;
flex-wrap: wrap;


`


const Title = styled.div`
height:50px;
width: 400px;
display: flex;
justify-content: center;
align-self: center;
margin-bottom: 20px;
margin-top: 20px;
font-weight: 600;
font-size: 25px;


@media screen and (max-width:320px){
  width: 300px;
  font-size: 15px;
}

`

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

