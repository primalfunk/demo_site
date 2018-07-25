import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Button, Divider, Grid, Header, Segment } from 'semantic-ui-react'
import axios from 'axios'

class Weather extends React.Component {
  state = { weather: [], visible: true }

  handleClick(woe) {
    axios.get(`/api/weather/${woe}`)
      .then( res => this.setState({ weather: res.data }))
      .catch( res => { () => console.log(res.errors) } )
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { weather, visible } = this.state
    return(
      <BigContainer> 
        <Divider hidden />
        <Segment style={{ "backgroundColor": "#4c5563", "margin": "10px" }}>
          { visible ? 
            <Segment raised fluid style={{ "textAlign": "center", "backgroundColor": "#858e9b", "height": "30vh" }}>
            <MyHeader>Using the <a style={{"color": "blue"}}href="http://www.metaweather.com">metaweather.com</a> API, get a 5-day weather forecast for one of these cities:</MyHeader>
            <ul>
              <MyLi onClick={ () => this.handleClick(2459115) }>New York</MyLi>
              <MyLi onClick={ () => this.handleClick(44418) }>London</MyLi>
              <MyLi onClick={ () => this.handleClick(1062617) }>Singapore</MyLi>
            </ul>
          </Segment>
          : null }
            { (weather.consolidated_weather && visible === false) ? 
            <Fragment>
              <MyHeader as="h2">{weather.parent.title}</MyHeader>
              <Segment raised style={{ "display": "flex", "backgroundColor": "#858e9b", "height": "30vh", "width": "60vw"}}>
                { weather.consolidated_weather.map( (day) => (
                  <div key={day.id} style={{ "textAlign": "center", "border": "solid black 1px", "margin": "10px", "padding": "10px", "display": "flex", "flexDirection": "column", "backgroundColor": "#3a414c"}}>
                    <p>{`${day.applicable_date.slice(5)}:`}</p> 
                    <p><b>High:</b>{` ${day.max_temp.toFixed(2)} C`}</p> 
                    <p><b>Low:</b>{` ${day.min_temp.toFixed(2)} C`}</p> 
                    <p><b>Hum:</b>{` ${day.humidity}%`}</p> 
                    <p><b>{`${day.weather_state_name}`}</b></p>
                  </div>
                ))}
              </Segment>
              <Button onClick={() => this.setState({ visible: !this.state.visible })}>Back</Button>
            </Fragment>
            : null }
        </Segment>
        <Divider />
      </BigContainer>
    )
  }
}

const MyHeader = styled(Header)`
  font-size: 25px;
`

const MyLi = styled.li`
  font-weight: bold;
  font-size: 20px;
  color: blue;
  width: 100px;
  cursor: pointer;
  &:hover {
    color: lightblue;
  }
`
const BigContainer = styled.div`
  background-color: #3a414c;
  height: 40vh;
`


export default Weather
