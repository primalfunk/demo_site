import React from 'react'
import { Header, Segment, Form, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import axios from 'axios'

class Comics extends React.Component {
  state = { comics: [], query: '', showing: false }

  handleSubmit = e => {
    e.preventDefault()
    axios.get(`/api/comics/${this.state.query}`)
      .then(res => this.setState({ comics: res.data, showing: !this.state.showing }))
      .catch(res => { console.log(res.errors) })
    this.setState({ query: '' })
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  render() {
    const { comics } = this.state
    let results = []
    comics.results ? results = comics.results.filter( result => result.real_name !== null ) : null
    return (
      <div>
        <Segment raised style={{"backgroundColor": "#858e9b", "height": "auto"}}>
          <Segment raised style={{ "backgroundColor": "#4c5563"}}>
          <Header>Search a comic book character name with the <a href="http://comicvine.gamespot.com" style={{"color": "blue"}}>ComicVine</a> site API.</Header>
            <Form onSubmit={this.handleSubmit}>
            <Form.Input 
              type="text" 
              value={this.state.query}
              onChange={this.handleChange}
              placeholder="Character name" />
            <Button type="submit" content="Submit"></Button>
          </Form>
          </Segment>
          <ResContainer>
            { this.state.showing ? <Header>Click a result to see more details!</Header> : null }
            { results ? results.map( char => (
              <div key={char.id} style={{"cursor": "pointer"}}onClick={() => {
                this.setState({ showing: !this.state.showing })
                alert(`Character: ${char.name}\nBirth: ${char.birth}\nBackstory: ${char.deck}`)
              }}>
                { `${char.name} - (${char.real_name})` }
              </div>
              ))
              : null
            }
          </ResContainer>
        </Segment>
      </div>
    )
  }
}

const ResContainer = styled(Segment)`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  font-size: 20px;
  color: blue;
  background-color: black;
`

export default Comics