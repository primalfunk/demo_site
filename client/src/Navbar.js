import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import Contact from './Contact'

class Navbar extends React.Component {
  state = { visible: false }

  toggleContact(visible) {
    this.setState({ visible: !visible })
  }

  render() {
    const { visible } = this.state
    return(
      <Fragment>
        <Flexbar>
          <a href="http://www.wikipedia.com">Wikipedia</a>
          <span style={{cursor: "pointer"}}onClick={ () => this.toggleContact(visible)}>Contact me</span>
          <a href="http://www.google.com">Google</a>
        </Flexbar>
        { visible ? 
          <Contacter visible={visible}><Contact /></Contacter> :
          null
        }
      </Fragment>
    )
  }
}

const Flexbar = styled.div`
  background-color: #a7bfe5;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding-left: 10%;
  padding-right: 14%;
`

const enter = keyframes`
  from {
    opacity: 0;
    transform: translate(0px, -300px);
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`

const Contacter = styled.div`
  animation: ${ enter } 0.8s;
`

export default Navbar
