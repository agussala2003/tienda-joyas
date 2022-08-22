import React from 'react'
import styled from 'styled-components'
import Welcome from './Welcome'
import Shop from './Shop'

function Main() {
  return (
   <MainContainer>
        <Welcome/>
        <Shop/>
   </MainContainer>
  )
}

export default Main

const MainContainer = styled.div `
`