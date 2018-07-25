import React from 'react'
import { Card, Image, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import jared from './jared.png'

class Contact extends React.Component{

  render(){

    return(
      <MySegment raised style={{"backgroundColor": "black"}}>
        <Card>
          <Image src={jared} />
          <Card.Content>
            <Card.Header>Jared Menard</Card.Header>
            <Card.Meta>
              <span>Developer, musician, philomath, and certified good guy</span>
            </Card.Meta>
            <Card.Description>I enjoy building stuff, learning new things, and finding ways to make our my better</Card.Description>
          </Card.Content>
          <Card.Content extra style={{"display": "flex", "justify-content": "space-between"}}>
            <a href="mailto:jared.d.menard@gmail.com">Email Jared</a>
            <span></span>
            <a href="https://github.com/primalfunk">Jared's Github</a>
          </Card.Content>
        </Card>
      </MySegment>
    )
  }
}

const MySegment = styled(Segment)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100vw;
`

export default Contact