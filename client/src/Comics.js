import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

class Comics extends React.Component {
  state = { comics: [] }
  render() {
    return (
      <div>
        <Segment raised style={{"backgroundColor": "#858e9b", "height": "30vh"}}>
          <Segment raised style={{ "backgroundColor": "#4c5563"}}>
          <Header>Nothing here yet...</Header>
          </Segment>
        </Segment>
      </div>
    )
  }
}

export default Comics