import React,{useState, useEffect} from 'react'
import styled from "styled-components"
import pix from "../../img/f1.jpg"
import { MdDeleteSweep } from 'react-icons/md';
import { connect } from 'react-redux'
import { Input } from 'antd'
import {removeFromcart, adjustQty} from "../AuthState/actionState"
import { Link, useHistory } from "react-router-dom";

function CartCard({r, remove, view,chng}) {
  const hist = useHistory();
  const [counter, setCounter] = useState(0)
  const [subTotal, setsubTotal] = useState(0)
  const [myQTY, setMyQTY] = useState(r.qty)

  // useEffect(() => {
  //   let newCount = 0
  //   let newPrice = 0
    

  //   view.forEach(el => {
  //     newCount += el.qty
  //     newPrice += el.price * el.qty
     

  //   })
  //   setCounter(newCount)
  //   setsubTotal(newPrice)
   
  // }, [counter, view, setCounter])
  
  return (
    <CardAll>
      <DetailsCon>
        <FoodImg>
          <img src={r.avatar} />

        </FoodImg>
        <FoodDetails>
          <Tseller>
            Seller: Udeme's Kitchen

          </Tseller>
          <Tides>
            <Ttitle>
              {r.title}
          </Ttitle>
            <Tdes>
              prepare from the best kitchen  prepare from the best kitchen
           
              </Tdes>
          </Tides>
          <Tremove
            onClick={
              () => {
                remove(r.id)
              }
            }
          >
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
      <Input
            min="1"
            type="number"
            value={r.qty}
            style={{
              height: "65px",
              width: "60px",
              border: "1px solid #004A1E"

            }}

            onChange={(e) => {
              setMyQTY(e.target.value)
              chng(r.id, e.target.value)
            }}

          />
      </QtyCon>
      <PriceCon>
           {r.price}

      </PriceCon>
      <SubCon>
        {subTotal}
      </SubCon>


    </CardAll>
  )
}

const mapDis = (dispatch) =>{

  return{
    remove:(id)=>{
  dispatch(removeFromcart(id))
    },
    chng: (id, value) => {
      dispatch(adjustQty(id, value))
    },
   
   
  }

}

// const mapState = (state) => {
//   return {
//     view: state.Food.cart,
//   }
// }


export default connect (null, mapDis) (CartCard)

const Tides = styled.div`

height: 55px;
display: flex;
flex-direction: column;

justify-content: space-between;
margin-top: -10px;
`

const Tremove = styled.div`
display: flex;
margin-top: 25px;

margin-left: -2px;
cursor: pointer;

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
