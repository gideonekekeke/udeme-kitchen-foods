import React from 'react'
import styled from "styled-components"
import { connect, useDispatch, useSelector } from "react-redux"

function UnitPrice({ view }) {
  return (
    <Container>

    </Container>
  )
}

const mapState = (state) => {
  return {
    view: state.Food.cart,
  }
}

export default connect(mapState)(UnitPrice)

const Container = styled.div``
